import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./form";

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Form onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});