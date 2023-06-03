import { fireEvent, render, screen } from "@testing-library/react";
import ReserveMod1 from './ReserveMod1';

describe("Reserve a Table Form", () => {
  test("User is able to reserve a table at Little Lemon", () => {
    const handleSubmit = jest.fn();
    render(<ReserveMod1 onSubmit={handleSubmit} />);

    const emailInput = screen.getByLabelText(/Your Email/);
    fireEvent.change(emailInput, {target: {value:"ajaj@gmail.com"}});

    const nameInput = screen.getByLabelText(/Your Name/);
    fireEvent.change(nameInput, {target: {value:"Bob"}});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});

