import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ handleInputChange }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = ({ target }) => {
    setInputValue(target.value);
    handleInputChange(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => handleChange(e)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            id="basic-addon2"
            onClick={(e) => handleChange(e)}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
Search.propTypes = {
  handleInputChange: PropTypes.func,
};
export default Search;
