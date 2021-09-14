import React, { useState, useEffect } from "react";
import User from "./user";
import { paginate } from "./utils/paginate";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../API";
import SearchStatus from "./searchStatus";

const Users = ({ users: allUsers, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();

  const pageSize = 4;
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);
  const handleProfessionsSelect = (item) => {
    setSelectedProf(item);
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers;
  console.log(filteredUsers);
  const count = filteredUsers.length;

  const users = paginate(filteredUsers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf(undefined);
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionsSelect}
            valueProperty="_id"
            contentProperty="name"
          />
          <button onClick={clearFilter} className="btn btn-secondary mt-2">
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus users={filteredUsers} />
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
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};
Users.propTypes = {
  users: PropTypes.array,
  onDelete: PropTypes.func,
};
export default Users;
