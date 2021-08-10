import React from 'react';
import Register from './register';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe("Register", () => {
    describe("with valid inputs", () => {
        it('calls the onSubmit function', async () => {
            const mockOnSubmit = jest.fn()
            const { getByLabelText, getByRole } = render(<Register onSubmit={mockOnSubmit} />)

            await act(async () => {
                fireEvent.change(getByLabelText("Username:"), { target: { value: "user123" } })
                // fireEvent.change(getByLabelText("Email Address *"), {target: {value:"email@test.com"}})
                // fireEvent.change(getByLabelText("Password *"), {target: {value:"pword"}})

            })
            await act(async () => {
                fireEvent.click(getByRole("button"))
            })

            expect(mockOnSubmit).toHaveBeenCalled()

        })
    })
})