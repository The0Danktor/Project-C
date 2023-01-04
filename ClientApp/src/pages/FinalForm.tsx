import { useRef } from "react";
import { Descendant } from "slate";
import RichTextEditor from "../components/Shared/Editor";

type RefType = { get value(): Descendant[], set value(x) };

const initial: RefType = {
  value: [{ type: "paragraph", children: [{ text: "" }] }]
};

export function FinalForm() {

  const seeRef = useRef<RefType>(initial);
  const expectRef = useRef<RefType>(initial);
  const triedRef = useRef<RefType>(initial);

  return <div className="m-4 p-4">
    <ol className="list-decimal">
      <li>
        Wat zie je?
        <RichTextEditor ref={seeRef} />
      </li>
      <li>
        Wat verwacht je?
        <RichTextEditor ref={expectRef} />
      </li>
      <li>
        Wat heb je zelf al gedaan?
        <RichTextEditor ref={triedRef} />
      </li>
    </ol>
  </div>
}