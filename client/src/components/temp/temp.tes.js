import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Modal, Form, Input } from "antd";
import Temp from "./temp";

it("show the sended message", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Temp onSubmit={onSubmit} />);
  const inputValue = "12";

  fireEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
  fireEvent.click(getByText(/ok/i));



  expect(onSubmit).toBeCalled();
});
