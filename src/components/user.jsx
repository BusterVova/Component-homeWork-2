import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
const User = ({ user, onDelete }) => {
  return (
    <>
      <th>{user.name}</th>
      <Qualities qualities={user.qualities} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <Bookmark />
      </td>
      <td>
        <button
          onClick={() => onDelete(user._id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default User;
