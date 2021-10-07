import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";
import DeleteButton from "./deleteButton";
// import { Route, Link } from "react-router-dom";

const User = ({ user, onDelete }) => {
  console.log(user.name);
  return (
    <>
      <th>
        <a>{user.name}</a>
      </th>
      <Qualities qualities={user.qualities} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <Bookmark />
      </td>
      <td>
        <DeleteButton user={user} onDelete={onDelete} />
      </td>
    </>
  );
};
User.propTypes = {
  user: PropTypes.object,
  onDelete: PropTypes.func,
};
export default User;
