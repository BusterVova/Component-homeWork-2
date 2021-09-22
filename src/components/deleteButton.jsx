import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ user, onDelete }) => {
  return (
    <button
      onClick={() => onDelete(user._id)}
      type="button"
      className="btn btn-danger"
    >
      Delete
    </button>
  );
};
DeleteButton.propTypes = {
  user: PropTypes.array,
  onDelete: PropTypes.func,
};
export default DeleteButton;
