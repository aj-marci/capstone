import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('Renders the Reserve Form Button', () => {
    render(<Header />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('Renders the Reserve Form Button', () => {
  render(<Header />);
  const reserveBtn = screen.getByRole("button");
  expect(reserveBtn).toBeInTheDocument();
})