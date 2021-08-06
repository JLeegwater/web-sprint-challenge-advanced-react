import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/first Name:/i);

  const lastName = screen.getByLabelText(/Last Name:/i);

  const address = screen.getByLabelText(/Address/i);

  const city = screen.getByLabelText(/City/i);

  const state = screen.getByLabelText(/state:/i);

  const zip = screen.getByLabelText(/Zip:/i);

  const checkout = screen.getByRole("button");

  userEvent.type(firstName, "Jesse");
  userEvent.type(lastName, "Leegwater");
  userEvent.type(address, "1234 Road");
  userEvent.type(city, "BigCity");
  userEvent.type(state, "CA");
  userEvent.type(zip, "12345");
  expect(screen.queryByTestId("successMessage")).not.toBeInTheDocument();
  userEvent.click(checkout);
  const successMsg = screen.queryByTestId("successMessage");
  expect(successMsg).toBeInTheDocument();
});

/* test("proves the tests can fail", () => {
  render(<CheckoutForm />);

  expect(screen.queryByTestId("successMessage")).toBeInTheDocument();
});
 */
