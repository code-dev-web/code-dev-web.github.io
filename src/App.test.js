import { render, screen } from "@testing-library/react";
import App from "./App";

test("To-Do app", () => {
  render(<App />);
  const linkElement = screen.getByText(/This tutorial/i);
  expect(linkElement).toBeInTheDocument();
});
