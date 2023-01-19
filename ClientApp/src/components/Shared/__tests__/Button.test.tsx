import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("renders a button", () => {
  render(<Button value="test" />);

  const button = screen.getByText("test");
  
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("test");
});