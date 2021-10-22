import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="col-md-12 mb-4 p-0">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div
            className="form-check form-check-inline"
            key={option.name + "_" + option.value}
          >
            <input
              className="form-check-input"
              type="radio"
              name={name}
              checked={option.value === value}
              id={option.name + "_" + option.value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmfor={option.name + "_" + option.value}
            >
              {option.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
RadioField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
export default RadioField;
