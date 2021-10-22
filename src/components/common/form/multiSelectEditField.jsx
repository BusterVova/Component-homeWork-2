/* eslint-disable indent */
import React from "react";
import Select from "react-select";
// import AsyncSelect from "react-select/async";
import PropTypes from "prop-types";
const MultiSelectEditField = ({
  options,
  onChange,
  name,
  label,
  defaultOptions,
}) => {
  console.log("options", options);
  console.log("defaultOptions", options);
  // const [chosenOptions, setChosenOptions] = React.useState([]);

  // React.useEffect(() => {
  //   if (defaultOptions.length) {
  //     const someOptions = defaultOptions.map((option) => ({
  //       value: option._id,
  //       label: option.name,
  //     }));
  //     setChosenOptions(someOptions);
  //   }
  // }, [defaultOptions]);
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;
  // console.log(optionsArray);

  const handleChange = (value) => {
    const correctValue = value.map((v) => ({ name: v.label, _id: v.value }));
    onChange({ name: name, value: correctValue });
  };
  return (
    <>
      <label className="form-label">{label}</label>
      <Select
        isMulti
        defaultValue={defaultOptions?.map((option) => ({
          value: option._id,
          label: option.name,
        }))}
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
MultiSelectEditField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultOptions: PropTypes.array,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
};
export default MultiSelectEditField;
