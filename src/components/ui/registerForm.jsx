import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../utils/validator";
import api from "../../API";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioFiled";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
  const [professions, setProfessions] = useState();
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "Male",
    qualities: [],
    licence: false,
  });
  const [errors, setErrors] = useState({});
  const [qualities, setQualities] = useState([]);

  const radio = [
    { name: "Vova", value: "Male" },
    { name: "Vita", value: "Female" },
    { name: "Other", value: "Other" },
  ];

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, [data]);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validatorConfig = {
    email: {
      isRequired: { message: "Email is required" },
      isEmail: { message: "Email is incorrect" },
    },
    password: {
      isRequired: { message: "Password is required" },
      isCapitalSymbol: { message: "Capital letter is required" },
      isContainDigit: { message: "Digit is required" },
      min: { message: "At least 8 digits are required", value: 8 },
    },
    profession: {
      isRequired: { message: "Profession is required" },
    },
    licence: {
      isRequired: { message: "Must be admitted" },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    return null;
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h3 className="mb-4">Register</h3>
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
              <SelectField
                onChange={handleChange}
                value={data.profession}
                options={professions}
                defaultOption="Choose..."
                error={errors.profession}
                label="Choose your profession"
              />
              <RadioField
                options={radio}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Choose your gender"
              />
              <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Choose your qualities"
              />
              <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
              >
                Admit Licence
              </CheckBoxField>
              <button
                className="btn btn-primary w-100 mx-auto mt-4"
                type="sumbit"
                disabled={!isValid}
              >
                Submit
              </button>
            </form>
            <p>
              Already registered?
              <Link to="/login" role="button">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

RegisterForm.propTypes = {
  toggleFormType: PropTypes.func,
};
export default RegisterForm;
