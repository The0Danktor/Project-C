import RichTextEditor from "../components/Shared/Editor"

export function FinalForm() {
  return <div className="w-full m-4">
    <p>1. Wat zie je?</p>
    <RichTextEditor />

    <p>2. Wat verwacht je?</p>
    <RichTextEditor />

    <p>3. Wat heb je zelf al gedaan?</p>
    <RichTextEditor />
  </div>
}