import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
// Write up the two tests here and make sure they are testing what the title shows
test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
    expect(header).not.toBeTruthy()
    expect(header).toHaveTextContent("Checkout Form")
});
test("form shows success message on submit with form details", () => {
     render(<CheckoutForm/>)
    //arrange
    const fNameInput = screen.getByLabelText(/first name/i)
    const lNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const successMessage = screen.queryByTestId('successMessage')
    //act/type some shit up
    userEvent.type(fNameInput,'lilia')
    userEvent.type(lNameInput, 'Ovcharenko')
    userEvent.type(addressInput, '007 Las vegas Blvd')
    userEvent.type(cityInput, "las Vegas")
    userEvent.type(stateInput, "nevada")
    userEvent.type(zipInput, "89019")
    const checkingout = screen.getByRole("button",/checkout/i)
    userEvent.click(checkingout)
    //assert
    expect(successMessage).toBeInTheDocument()
});