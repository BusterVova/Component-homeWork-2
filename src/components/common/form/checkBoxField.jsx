import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = (e) => {
    onChange({ name: name, value: e.target.checked });
  };
  return (
    <div className="col-md-12 mt-4 p-0">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={value}
          name={name}
          id={name}
          onChange={handleChange}
          checked={value}
        />
        <label className="form-check-label" htmlFor={name}>
          {children}
        </label>
      </div>
    </div>
  );
};
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default CheckBoxField;
