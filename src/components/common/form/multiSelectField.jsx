/* eslint-disable indent */
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label }) => {
  // console.log(options);
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;
  console.log(optionsArray);
  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  return (
    <>
      <label className="form-label">{label}</label>
      <Select
        isMulti
        defaultValue={"123"}
        closeMenuOnSelect={false}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </>
  );
};
MultiSelectField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
};
export default MultiSelectField;
