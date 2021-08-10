// register.test.js

import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import axios from 'axios'
import Register from './register';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('axios');

test('should register users', () => {

})

// it("submits", () => {
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<Register onSubmit={onSubmit} />);
//   fireEvent.submit(getByTestId("formid"));
//   expect(onSubmit).toHaveBeenCalled();

  // const form = container.querySelector('form')
  // const {username, email, password} = form.elements;
  // username.value = 'chucknorris';
  // password.value = 'I do not need a password';
  // email.value = 'chuck@norris.com'
  // console.log('hereeeeee', username.value)


  // expect(handleSubmit).toHaveBeenCalledWith({
  //   username: username.value,
  //   password: password.value,
  //   email: email.value,
  // });
// });


// it('renders a register form', () => {
//   act(() => {
//     render(<Register />, container);
//   });
//   expect(container.textContent).toBe("Movie MapperRegister");
// })

// it('should sumbit register information', () => {
//   act(() => {
//     render (

//     )
//   })
// })