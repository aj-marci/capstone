import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('Renders the Reserve Form Button', () => {
    render(<Header />);
    const reserveBtnText = screen.getByText("Reserve a Table");
    expect(reserveBtnText).toBeInTheDocument();
})

test('Renders the Reserve Form Button', () => {
  render(<Header />);
  const reserveBtn = screen.getByRole("button");
  expect(reserveBtn).toBeInTheDocument();
})