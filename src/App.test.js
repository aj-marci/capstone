import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import ReserveMod1 from './ReserveMod1';

describe("Reserve Form", () => {
  test("User is unable to submit form", () => {
    const handleSubmit = jest.fn();
    render(<ReserveMod1 onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});