import { findByText, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Descendant } from "slate";
import RichTextEditor from "../Editor";

type RefType = { get value(): Descendant[], set value(x) };

const initial: RefType = {
  value: [{ type: "paragraph", children: [{ text: "" }] }]
};

const valueRef = createRef<RefType>();

test("renders a rich text editor with initial value", () => {
  render(<RichTextEditor ref={valueRef} />);

  expect(valueRef.current?.value).toEqual(initial.value);
});