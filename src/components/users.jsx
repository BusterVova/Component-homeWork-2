import React, { useState } from "react";
import User from "./user";
import { paginate } from "./utils/paginate";
import Pagination from "./pagination";
import PropTypes from "prop-types";

const Users = ({ users: allUsers, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const count = allUsers.length;

  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    console.log("pageIndex", pageIndex);
    setCurrentPage(pageIndex);
  };

  const users = paginate(allUsers, currentPage, pageSize);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col">Кнопка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element) => (
            <tr key={element._id}>
              <User user={element} onDelete={onDelete} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};
Users.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func,
};
export default Users;
