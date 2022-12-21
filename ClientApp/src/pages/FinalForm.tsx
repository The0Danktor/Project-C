import { useRef } from "react";
import { Descendant } from "slate";
import RichTextEditor from "../components/Shared/Editor";

type RefType = { get value(): Descendant[], set value(x)};

const initial: RefType = {
  value: [{ type: "paragraph", children: [{ text: "" }] }]
};

export function FinalForm() {

  const seeRef = useRef<RefType>(initial);
  const expectRef = useRef<RefType>(initial);
  const triedRef = useRef<RefType>(initial);

  return <div className="w-full m-4">
    <p>1. Wat zie je?</p>
    <RichTextEditor ref={seeRef} />

    <p>2. Wat verwacht je?</p>
    <RichTextEditor ref={expectRef} />

    <p>3. Wat heb je zelf al gedaan?</p>
    <RichTextEditor ref={triedRef} />
  </div>
}