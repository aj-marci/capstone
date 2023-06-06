import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import { Form } from "formik";

it("should show validation on blur", async () => {
  const { getByLabelText } = render(<Form />);
  const input = getByLabelText("Your Email");
  fireEvent.blur(input);
  await wait(() => {
    expect(getByTestId("emailError")).not.toBe(null);
    expect(getByTestId("emailError")).toHaveTextContent("Required");
  });
});