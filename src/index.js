import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";

const fields = [
  {
    label: { htmlfor: "username", text: "Username:" },
    input: {
      type: "text",
      name: "username",
      placeholder: "Username",
      id: "username",
    },
  },
  {
    label: { htmlfor: "email", text: "E-mail:" },
    input: {
      type: "email",
      name: "email",
      placeholder: "e-mail",
      id: "email",
    },
  },
  {
    label: { htmlfor: "password", text: "Password:" },
    input: {
      type: "password",
      name: "password",
      placeholder: "Password",
      id: "password",
    },
  },
  {
    label: { htmlfor: "confirmPassword", text: "Confirm Password:" },
    input: {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      id: "confirmPassword",
    },
  },
];

const validationRules = [
  {
    name: "username",
    condition: "values.username.length === 0",
    message: "Length of username is too short",
  },
  {
    name: "email",
    condition: "values.email.length === 0",
    message: "Length of email is too short",
  },
  {
    name: "password",
    condition: "values.password.length < 6",
    message: "Length of password is too short",
  },
  {
    name: "password",
    condition: "values.password !== values.confirmPassword",
    message: "Passwords must match",
  },
];

ReactDOM.render(
  <Form fields={fields} validationRules={validationRules} />,
  document.getElementById("root")
);
