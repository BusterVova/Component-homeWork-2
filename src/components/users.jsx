import React, { useState, useEffect } from "react";
import { paginate } from "./utils/paginate";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../API";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";
//
const Users = ({ users: allUsers, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

  const pageSize = 6;
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

  const handleSort = (item) => {
    setSortBy(item);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers;
  const count = filteredUsers.length;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
  const users = paginate(sortedUsers, currentPage, pageSize);
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
        <UserTable
          users={users}
          onDelete={onDelete}
          onSort={handleSort}
          selectedSort={sortBy}
        />
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
