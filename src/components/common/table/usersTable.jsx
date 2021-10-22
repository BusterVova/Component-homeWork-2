import React from "react";
import PropTypes from "prop-types";
// import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Bookmark from "../bookmark";
// import DeleteButton from "./deleteButton";
/* eslint-disable no-eval */

const UserTable = ({ users, onSort, selectedSort, onDelete }) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества", path: "qualities" },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      // eslint-disable-next-line
      component: () => <Bookmark />,
    },
    delete: {
      name: "Кнопка",
      component: (id) => {
        return (
          <button
            onClick={() => onDelete(id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        );
      },
    },
  };
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </table>
  );
};
UserTable.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object.isRequired,
};
export default UserTable;
