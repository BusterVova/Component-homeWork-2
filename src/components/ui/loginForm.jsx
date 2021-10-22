import React, { useState, useEffect } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
// import { validator } from "../utils/validator";
import * as yup from "yup";
const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .matches(/(?=.*[A-Z])/, "Capital letter is required")
      .matches(/(?=.*[0-9])/, "Digit is required")
      .matches(/(?=.{8,})/, "At least 8 digits are required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is incorrect"),
  });
  // const validatorConfig = {
  //   email: {
  //     isRequired: { message: "Email is required" },
  //     isEmail: { message: "Email is incorrect" },
  //   },
  //   password: {
  //     isRequired: { message: "Password is required" },
  //     isCapitalSymbol: { message: "Capital letter is required" },
  //     isContainDigit: { message: "Digit is required" },
  //     min: { message: "At least 8 digits are required", value: 8 },
  //   },
  // };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    // const errors = validator(data, validatorConfig);
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    // setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={"Email"}
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label={"Password"}
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Stay in system
      </CheckBoxField>
      <button
        className="btn btn-primary w-100 mx-auto mt-4"
        type="sumbit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
