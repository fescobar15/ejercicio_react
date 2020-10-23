import { useState } from "react";

const useForm = (props, validateForm) => {
  const [errors, setErrors] = useState({});

  //Create object with the fields to initialize values
  const items = () => {
    let string = "{";
    for (let i = 0; i < props.fields.length; i++) {
      string += '"' + props.fields[i].input.name + '":""';
      if (i + 1 < props.fields.length) {
        string += ",";
      }
    }
    string += "}";
    return string;
  };

  const [values, setValues] = useState(JSON.parse(items()));

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
    console.log(values);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
    setErrors(validateForm(props.validationRules, values));
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
