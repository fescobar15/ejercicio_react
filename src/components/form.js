import React, { useState } from "react";

import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";

import Theme from "../context/theme";

const Form = (props) => {
  const [fields] = useState(props.fields);
  const { handleChange, handleSubmit, errors } = useForm(props, validateForm);
  console.log(errors);

  const items = fields.map((f) => {
    const name = f.input.name;
    return (
      <div className="form-group">
        <label htmlFor={f.label.htmlfor}>{f.label.text}</label>
        <input
          type={f.input.type}
          name={name}
          placeholder={f.input.placeholder}
          id={f.input.id}
          onChange={handleChange}
          className="form-control"
        />
        {errors[name] && <p>{errors[name]}</p>}
      </div>
    );
  });

  return (
    <div className="container">
      <Theme.Consumer>
        {(value) => <h1 className={value}>Register form</h1>}
      </Theme.Consumer>

      <form onSubmit={handleSubmit}>
        {items}
        <button className="btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Form;
