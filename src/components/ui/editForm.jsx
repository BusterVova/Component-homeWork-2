/* eslint-disable indent */
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
// import { validator } from "../utils/validator";
import api from "../../API";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioFiled";
import MultiSelectEditField from "../common/form/multiSelectEditField";
// import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";

const EditForm = ({ match }) => {
  const [professions, setProfessions] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [data, setData] = useState(
    userInfo
      ? {
          email: "vova_13_frolov@mail.ru",
          name: "",
          profession: "",
          sex: "Male",
          qualities: [],
          defaultQualities: [],
        }
      : {}
  );
  const [errors, setErrors] = useState({});
  const [qualities, setQualities] = useState([]);
  const radio = [
    { name: "Vova", value: "Male" },
    { name: "Vita", value: "Female" },
    { name: "Other", value: "Other" },
  ];
  const userId = match.params.id;

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, [data]);

  useEffect(() => {
    api.users.getById(userId).then(
      (user) => setUserInfo(user),
      setData((prevState) => ({
        ...prevState,
        name: userInfo?.name,
        profession: userInfo?.profession?.name,
        defaultQualities: userInfo.qualities,
      }))
    );
  }, [qualities]);
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  // console.log(data);
  // console.log(qualities);

  useEffect(() => {
    validate();
  }, [data]);

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
    return null;
  };
  // console.log(userInfo.qualities);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h3 className="mb-4">Edit Profile</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                // error={errors.email}
              />
              <TextField
                label={"Email"}
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <SelectField
                onChange={handleChange}
                value={data.profession}
                options={professions}
                defaultOption="Choose..."
                label="Choose your profession"
              />
              <RadioField
                options={radio}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Choose your gender"
              />
              <MultiSelectEditField
                options={qualities}
                defaultOptions={data.defaultQualities}
                onChange={handleChange}
                name="defaultQualities"
                label="Choose your qualities"
              />
              <button
                className="btn btn-primary w-100 mx-auto mt-4"
                type="sumbit"
                disabled={isValid}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

EditForm.propTypes = {
  match: PropTypes.object,
};
export default EditForm;
