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

const setupName = () => {
  const utilsFirst = render(<ContactForm />);
  const inputFirst = utilsFirst.getByLabelText("first-name");
  return {
    inputFirst,
    ...utilsFirst
  };
};

const setupLast = () => {
  const utilsLast = render(<ContactForm />);
  const inputLast = utilsLast.getByLabelText("last-name");
  return {
    inputLast,
    ...utilsLast
  };
};

const setupEmail = () => {
  const utilsEmail = render(<ContactForm />);
  const inputEmail = utilsEmail.getByLabelText("e-mail");
  return {
    inputEmail,
    ...utilsEmail
  };
};

const setupMessage = () => {
  const utilsText = render(<ContactForm />);
  const inputText = utilsText.getByLabelText("message-text");
  return {
    inputText,
    ...utilsText
  };
};

test("first name input", () => {
  const { inputFirst } = setupName();
  fireEvent.change(inputFirst, { target: { value: "ted" } });
  expect(inputFirst.value).toBe("ted");
});

test("last name input", () => {
  const { inputLast } = setupLast();
  fireEvent.change(inputLast, { target: { value: "kasinsky" } });
  expect(inputLast.value).toBe("kasinsky");
});

test("email should input", () => {
  const { inputEmail } = setupEmail();
  fireEvent.change(inputEmail, { target: { value: "Ted.Kasinsky@gmail.com" } });
  expect(inputEmail.value).toBe("Ted.Kasinsky@gmail.com");
});

test("message text should input", () => {
  const { inputText } = setupMessage();
  fireEvent.change(inputText, {
    target: { value: "This is a test, this is only a test" }
  });
  expect(inputText.value).toBe("This is a test, this is only a test");
});
