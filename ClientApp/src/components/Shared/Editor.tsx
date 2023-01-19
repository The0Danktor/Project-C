import { Transition } from "@headlessui/react";
import { KeyboardEvent, MouseEventHandler, useCallback, useEffect, useRef, useState, forwardRef, ForwardedRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { createEditor, BaseEditor, Descendant, Editor, Transforms, Text, Range } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact, ReactEditor, RenderLeafProps, useSlate, RenderElementProps, useSelected, useFocused } from "slate-react";
import { User, Machine } from "../../Types/types";
import { parseToken } from "../../pages/AddTicket"

let globalUsers: User[] = [];
let globalMachines: Machine[] = [];

export type CustomEditorType = BaseEditor & ReactEditor;

export type TextElement = FormattedText | MentionElement;

export type ParagraphElement = {
  type: "paragraph";
  children: TextElement[];
};

export type QuoteElement = {
  type: "quote";
  children: Text[];
};

export type UnorderedListElement = {
  type: "unordered-list";
  children: ListItemElement[];
};

export type OrderedListElement = {
  type: "ordered-list";
  children: ListItemElement[];
};

export type ListItemElement = {
  type: "list-item";
  children: TextElement[];
};

export type MentionElement = {
  type: "mention";
  mentionType?: "user" | "machine";
  id?: string;
  children: FormattedText[];
}

export type CustomElement = ParagraphElement | QuoteElement | UnorderedListElement | OrderedListElement | ListItemElement | MentionElement;

export type FormattedText = {
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
  code?: true;
  placeholder?: true;
};

export type BlockType = CustomElement["type"]
export type Format = keyof Omit<FormattedText, "text">;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditorType
    Element: CustomElement
    Text: FormattedText
  }
};

const CustomEditor = {
  isMarkActive(editor: CustomEditorType, format: Format) {
    const marks = Editor.marks(editor);
    if (!marks) return false;
    return marks[format] === true;
  },
  toggleMark(editor: CustomEditorType, format: Format) {
    if (this.isMarkActive(editor, format))
      Editor.removeMark(editor, format);
    else
      Editor.addMark(editor, format, true);
  },
  isBlockActive(editor: CustomEditorType, format: BlockType) {
    const [match] = Editor.nodes(editor, {
      match: n => Editor.isBlock(editor, n) && n.type === format,
    });

    const [otherMatch] = Editor.nodes(editor, {
      match: n => Editor.isBlock(editor, n) && n.type !== format && n.type !== "list-item",
    });

    return !!match && !otherMatch;
  },
  toggleBlock(editor: CustomEditorType, format: BlockType) {
    const isActive = this.isBlockActive(editor, format);

    const isList = format.endsWith("-list");

    Transforms.unwrapNodes(editor, {
      match: n => Editor.isBlock(editor, n) && n.type.endsWith("-list"),
      split: true
    });

    Transforms.setNodes(editor, {
      type: isActive ? "paragraph" : isList ? "list-item" : format
    });

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  }
};

const hotkeys: Record<string, (editor: CustomEditorType) => void> = {
  "b": editor => CustomEditor.toggleMark(editor, "bold"),
  "i": editor => CustomEditor.toggleMark(editor, "italic"),
  "u": editor => CustomEditor.toggleMark(editor, "underline"),
  "Dead": editor => CustomEditor.toggleMark(editor, "code"),
  "/": editor => CustomEditor.toggleBlock(editor, "quote"),
};

const renderers: Record<CustomElement["type"], (props: RenderElementProps) => JSX.Element> = {
  "paragraph": props => <p {...props.attributes}>{props.children}</p>,
  "quote": props => <blockquote {...props.attributes} className="pl-8" >{props.children}</blockquote>,
  "unordered-list": props => <ul {...props.attributes} className="list-disc list-inside">{props.children}</ul>,
  "ordered-list": props => <ol {...props.attributes} className="list-decimal list-inside">{props.children}</ol>,
  "list-item": props => <li {...props.attributes} className="ml-8">{props.children}</li>,
  "mention": props => <Mention {...props} />
};

function Mention({ attributes, children, element }: RenderElementProps) {
  const selected = useSelected();
  const focused = useFocused();

  const el = element as MentionElement;

  const arr: { id: string, name: string }[] = el.mentionType === "user" ? globalUsers : globalMachines;

  const name = arr.find(e => e.id === el.id)?.name || "Unknown";

  return (
    <>
      <span {...attributes} className={`bg-gray-300 dark:bg-gray-700 px-1 rounded cursor-pointer ${selected && focused ? "!bg-sky-500 text-white" : ""}`} contentEditable={false}>
        {children}
        {el.mentionType === "user" ? "@" : "#"}<strong>{name}</strong>
      </span>
    </>
  )
}

const withMergeAdjacentLists = (editor: CustomEditorType) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = entry => {
    const [node, path] = entry;

    if (Editor.isBlock(editor, node)) {
      const text = Editor.string(editor, path);
      const numberMatch = text.match(/^\d+\. /);
      const bulletMatch = text.match(/^[*-] /);

      if (node.type === "paragraph" && node.children.length > 0 && (numberMatch || bulletMatch)) {
        CustomEditor.toggleBlock(editor, numberMatch ? "ordered-list" : "unordered-list");

        const start = Editor.start(editor, path);
        const offset = numberMatch ? numberMatch[0].length : bulletMatch![0].length;

        Transforms.delete(editor, {
          at: {
            anchor: start,
            focus: { ...start, offset }
          }
        });

        return;
      }

      if (node.type === "ordered-list" || node.type === "unordered-list") {
        node.children.forEach(child => {
          if (Editor.isBlock(editor, child) && child.type !== "list-item") {
            Transforms.setNodes(editor, { type: "list-item" }, { at: [...path, node.children.indexOf(child)] });
          }
        });
      }

      const previous = Editor.previous(editor, { at: path });
      if (previous) {
        const [previousNode] = previous;
        if (Editor.isBlock(editor, previousNode) && node.type.endsWith("-list") && previousNode.type === node.type) {
          Transforms.mergeNodes(editor, {
            at: path,
          });
          return;
        }
      }
    }

    normalizeNode(entry);
  };

  return editor;
};

const withMentions = (editor: CustomEditorType) => {
  const { isInline, isVoid } = editor;

  editor.isInline = element => {
    return element.type === "mention" ? true : isInline(element);
  }

  editor.isVoid = element => {
    return element.type === "mention" ? true : isVoid(element);
  }

  return editor;
}

interface IEditorProps {
  initialValue?: Descendant[];
  readOnly?: boolean;
}

function RichTextEditor({
  initialValue = [{ type: "paragraph", children: [{ text: "" }] }],
  readOnly = false
}: IEditorProps, valueRef: ForwardedRef<{ value: Descendant[] }>) {
  const [editor] = useState(() => withMergeAdjacentLists(withMentions(withReact(withHistory(createEditor())))));
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<Range | undefined>();
  const [index, setIndex] = useState(0);
  const [searchType, setSearchType] = useState<"user" | "machine">("user");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);

  const [users, setUsers] = useState<User[]>([]);
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    const id = parseToken()?.sid;

    if (!id)
      return;

    fetch("http://localhost:7162/api/User/ByCompany/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then((data: User[]) => {
        setUsers(data);
        globalUsers = data;
      });

    fetch("http://localhost:7162/api/Machine/Current/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then((data: Machine[]) => {
        setMachines(data);
        globalMachines = data;
      });
  }, [])

  useImperativeHandle(valueRef, () => ({
    get value() { return value; },
    set value(x) {
      setValue(x);
      Editor.withoutNormalizing(editor, () => {
        Transforms.delete(editor, {
          at: {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          },
        });
        Transforms.insertFragment(editor, x, { at: [0, 0] });
      });
    }
  }));

  const renderElement = useCallback((props: RenderElementProps) => {
    const renderedElement = renderers[props.element.type](props);

    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {

      const [match] = Editor.nodes(editor, {
        match: n => "type" in n && n.type === "mention",
        at: selection,
      });

      if (match) {
        const el = match[0] as MentionElement;

        const arr: { id: string, name: string }[] = el.mentionType === "user" ? globalUsers : globalMachines;

        const m = arr.find(e => e.id === el.id);
        const name = m?.name || "Unknown";

        const elementPath = ReactEditor.findPath(editor, props.element);
        const mentionPath = ReactEditor.findPath(editor, el);

        if (
          (!props.element.type.endsWith("-list") && elementPath.length === 1 && elementPath[0] === mentionPath[0]) ||
          (props.element.type === "list-item" && elementPath.length === 2 && elementPath[0] === mentionPath[0] && elementPath[1] === mentionPath[1])
        ) {
          return <>
            {renderedElement}
            <div contentEditable={false} className="my-1 p-2 bg-gray-200 dark:bg-gray-700 rounded">
              <h1 className="text-3xl">{name}</h1>
              <p className="text-sm italic">{el.mentionType === "user" ? "User" : "Machine"}</p>
              {el.mentionType === "user" ?
                <p>
                  <strong>Email: </strong>{(m as User).email}
                  <br />
                  <strong>Phone: </strong>{(m as User).phone}
                </p>
                :
                <p>
                  <strong>Tekennummer: </strong>{(m as Machine).tekennummer}
                </p>
              }
            </div>
          </>
        }
      }
    }

    return renderedElement;
  }, [editor]);

  const renderLeaf = useCallback((props: RenderLeafProps) => {

    const style = {
      ...(props.leaf.bold) && { fontWeight: "bold" },
      ...(props.leaf.italic) && { fontStyle: "italic" },
      ...(props.leaf.underline) && { textDecoration: "underline" },
      ...(props.leaf.code) && { fontFamily: "monospace" },
    };

    return (<span
      {...props.attributes}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      {props.leaf.placeholder && <span
        className="text-gray-600 absolute pointer-events-none"
        style={{ textDecoration: "inherit" }}
        contentEditable={false}
      >
        Type @ or # to tag a user/machine
      </span>}
      {props.children}
    </span>);
  }, []);

  const filteredUsers = search.length ? users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())) : users;
  const filteredMachines = search.length ? machines.filter(machine => machine.name.toLowerCase().includes(search.toLowerCase())) : machines;

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const parentEntry = Editor.parent(editor, editor.selection!);
    const [parent, parentPath] = parentEntry;

    if (e.ctrlKey) {
      if (e.key in hotkeys) {
        e.preventDefault();
        hotkeys[e.key](editor);
      }
      return;
    }

    const arr = searchType === "user" ? filteredUsers : filteredMachines;

    switch (e.key) {
      //@ts-ignore
      case "Enter":
        if (
          editor.selection &&
          Editor.path(editor, editor.selection).length > 0 &&
          Editor.isBlock(editor, parent) &&
          ["list-item", "quote"].includes(parent.type) &&
          Editor.isEmpty(editor, parent)
        ) {
          e.preventDefault();
          CustomEditor.toggleBlock(editor, "paragraph");
          return;
        }

      // falls through
      case "Tab":
        if (target) {
          e.preventDefault();
          Transforms.select(editor, target)

          Transforms.insertNodes(editor, {
            type: "mention",
            mentionType: searchType,
            id: searchType === "user" ? filteredUsers[index].id : filteredMachines[index].id,
            children: [
              {
                text: ""
              }
            ]
          });
          Transforms.move(editor);

          setTarget(undefined);
        }
        return;

      case "ArrowDown":
        if (target) {
          e.preventDefault();
          const prevIndex = (index + 1) % arr.length;
          setIndex(prevIndex);
        }
        return;

      case "ArrowUp":
        if (target) {
          e.preventDefault();
          const nextIndex = (index - 1 + arr.length) % arr.length;
          setIndex(nextIndex);
        }
        return;

      case "Escape":
        e.preventDefault();
        setTarget(undefined);
        return;

      case "Backspace":
        if (editor.selection && Range.isCollapsed(editor.selection)) {
          if (editor.children.length === 1 && Editor.isBlock(editor, editor.children[0]) && editor.children[0].type === "paragraph" && Editor.string(editor, editor.selection) === "") return;
          if (!(Editor.isBlock(editor, parent))) return;

          const prevParentEntry = Editor.previous(editor, { at: parentPath });

          if (["list-item", "quote"].includes(parent.type)) {
            if (Editor.isStart(editor, editor.selection.anchor, parentPath)) {
              // if (prevParent && Editor.isBlock(editor, prevParent)[0] && prevParent[0].type === parent.type && !Editor.isEmpty(editor, prevParent[0])) return;
              e.preventDefault();
              CustomEditor.toggleBlock(editor, "paragraph");
              return;
            }
          }

          if (Editor.isEmpty(editor, parent)) {
            e.preventDefault();
            // remove the block
            Transforms.removeNodes(editor, {
              at: editor.selection,
            });

            if (!prevParentEntry) return;

            const [prevParent, prevParentPath] = prevParentEntry;

            // move the cursor to the end of the previous block
            if (prevParentEntry && Editor.isBlock(editor, prevParent)) {
              const end = Editor.end(editor, prevParentPath);
              Transforms.select(editor, end);

              const nextParentEntry = Editor.next(editor, { at: prevParentPath });
              if (nextParentEntry) {
                const [nextParent, nextParentPath] = nextParentEntry;
                if (Editor.isBlock(editor, nextParent) && nextParent.type === prevParent.type) {
                  Transforms.mergeNodes(editor, {
                    at: nextParentPath
                  });
                }
              }
            }
          }
        }
        return;

      case "Delete":
        if (editor.selection) {
          // check if editor is empty
          if (editor.children.length === 1) return;
          if (!parentEntry) return;
          if (!(Editor.isBlock(editor, parent))) return;

          if (Editor.isEmpty(editor, parent)) {
            e.preventDefault();
            Transforms.removeNodes(editor, { at: parentPath });
            return;
          }
        }
        return;
    }
  }, [editor, filteredMachines, filteredUsers, index, searchType, target]);

  useEffect(() => {
    const el = dropdownRef.current;

    if (target && users.length > 0 && el) {
      const domRange = ReactEditor.toDOMRange(editor, target);
      const rect = domRange.getBoundingClientRect();
      el.style.top = `${rect.top + window.pageYOffset + 24}px`;
      el.style.left = `${rect.left + window.pageXOffset}px`;
    }
  }, [editor, index, search, target]);

  return (
    <Slate
      editor={editor}
      value={initialValue}
      onChange={e => {
        if (valueRef !== null && typeof valueRef === "object")
          setValue(e);

        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
          const [start] = Range.edges(selection);
          const wordBefore = Editor.before(editor, start, { unit: 'word' });
          const before = wordBefore && Editor.before(editor, wordBefore);
          const beforeRange = before && Editor.range(editor, before, start);
          const beforeText = beforeRange && Editor.string(editor, beforeRange);
          const beforeMatch = beforeText && beforeText.match(/^([@#])(\w*)$/);
          const after = Editor.after(editor, start);
          const afterRange = Editor.range(editor, start, after);
          const afterText = Editor.string(editor, afterRange);
          const afterMatch = afterText.match(/^(\s|$)/);

          if (beforeMatch && afterMatch) {
            setTarget(beforeRange);
            setSearchType(beforeMatch[1] === "@" ? "user" : "machine");
            setSearch(beforeMatch[2]);
            setIndex(0);
            return;
          }
        }

        setTarget(undefined);
      }}
    >
      <div className="flex flex-col gap-2 py-2">
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          readOnly={readOnly}
          className={`${readOnly ? "border-transparent" : "border-gray-200 dark:border-gray-700"} border-2 rounded-md p-2 selection:bg-sky-500 selection:text-white cursor-text`}
          decorate={([node, path]) => {
            const selection = editor.selection ?? { anchor: { path: [0, 0], offset: 0 }, focus: { path: [0, 0], offset: 0 } };
            return (
              !Editor.isEditor(node) &&
                Editor.isBlock(editor, node) &&
                Editor.isEmpty(editor, node) &&
                Range.includes(selection, path) &&
                Range.isCollapsed(selection)
                ? [
                  {
                    ...selection,
                    placeholder: true,
                  },
                ] : []
            )
          }}
        />
        {!readOnly && <Transition
          show={focused}
          enter="transition-all duration-75 overflow-hidden"
          enterFrom="h-0 opacity-0"
          enterTo="h-12 opacity-100"
          leave="transition-all duration-150 overflow-hidden delay-200"
          leaveFrom="h-12 opacity-100"
          leaveTo="h-0 opacity-0"
          className="flex gap-2"
        >
          <FormatButton format="bold" icon="format_bold" />
          <FormatButton format="italic" icon="format_italic" />
          <FormatButton format="underline" icon="format_underline" />
          <FormatButton format="code" icon="code" />
          <span className="w-[2px] h-8 mt-1 bg-gray-700"></span>
          <BlockButton format="unordered-list" icon="format_list_bulleted" />
          <BlockButton format="ordered-list" icon="format_list_numbered" />
          <BlockButton format="quote" icon="format_quote" />
        </Transition>}
        {target && (searchType === "user" ? filteredUsers.length > 0 : filteredMachines.length > 0) && (
          createPortal(
            (<div
              ref={dropdownRef}
              className="absolute z-10 p-1 bg-gray-300 dark:bg-gray-800 rounded-md shadow-lg"
              data-cy="mentions-portal"
            >
              {(searchType === "user" ? filteredUsers : filteredMachines).map((user, i) => (
                <div
                  key={user.id.toString()}
                  className={`rounded-md p-1 px-3 ${i === index ? 'bg-sky-500 text-white' : ''}`}
                >
                  {user.name}
                </div>
              ))}
            </div>)
            , document.body)
        )}
      </div>
    </Slate>
  )
}

export default forwardRef(RichTextEditor);

const BlockButton = ({ format, icon }: { format: BlockType, icon?: string }) => {
  const editor = useSlate();
  return (
    <EditorButton onClick={() => CustomEditor.toggleBlock(editor, format)} active={CustomEditor.isBlockActive(editor, format)} title={format} icon={icon} />
  );
};

const FormatButton = ({ format, icon }: { format: Format, icon?: string }) => {
  const editor = useSlate();

  return (
    <EditorButton onClick={() => CustomEditor.toggleMark(editor, format)} active={CustomEditor.isMarkActive(editor, format)} title={format} icon={icon} />
  );
};

const EditorButton = ({ onClick, active, title, icon = "error" }: { onClick: MouseEventHandler<HTMLButtonElement>, active: boolean, title: string, icon?: string }) => {
  const editor = useSlate();

  return (
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        onClick(e);
        ReactEditor.focus(editor);
      }}
      className={`!p-0 w-10 h-10 grid items-center ${active ? "text-sky-600" : ""}`}
      title={title.split("-").join(" ")}
    >
      <span className="material-icons-round">{icon}</span>
    </button>
  );
};