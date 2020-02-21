import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "mutationobserver-shim";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  const { getAllByText, getAllByPlaceholderText } = render(<ContactForm />);

  const contact = getAllByText(/first name/i);
  const place = getAllByPlaceholderText(/bill/i);
  const last = getAllByText(/last name/i);
  const email = getAllByText(/email/i);
  const message = getAllByText(/message/i);

  expect(contact).toBeTruthy();
  expect(place).toBeTruthy();
  expect(last).toBeTruthy();
  expect(email).toBeTruthy();
  expect(message).toBeTruthy();
});

test("testing the Submit Function", () => {
  const { getByText, getByLabelText, getAllByTestId } = render(<ContactForm />);
  const nameInput = getAllByTestId("firstName");
  const lastInput = getAllByTestId("lastName");
  const emailInput = getAllByTestId("email");
  const messageInput = getAllByTestId("message");

  fireEvent.change(nameInput, { target: { value: "Ted" } });
  fireEvent.change(lastInput, { target: { value: "Kasinsky" } });
  fireEvent.change(emailInput, { target: { value: "kasinsky@hotmail.com" } });
  fireEvent.change(messageInput, { target: { value: "Whatever Goes Here" } });

  expect(nameInput.value).toBe("Ted");
  expect(lastInput.value).toBe("Kasinsky");
  expect(emailInput.value).toBe("kasinsky@hotmail.com");
  expect(messageInput.value).toBe("Whatever Goes Here");

  fireEvent.click(getByText(/submit/i));

  const nameText = getByText(/ted/i);
  const lastText = getByText(/Kasinsky/i);
  const emailText = getByText(/kasinsky@hotmail.com/i);
  const messageText = getByText(/Whatever Goes Here/i);

  expect(nameText).toBeInTheDocument();
  expect(lastText).toBeInTheDocument();
  expect(emailText).toBeInTheDocument();
  expect(messageText).toBeInTheDocument();
});
