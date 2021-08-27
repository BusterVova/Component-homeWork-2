import React from "react";
import User from "./user";
const Users = ({ users, onDelete }) => {
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
          {users.map(
            (
              element //можно сделать деструктризацию
            ) => (
              <tr key={element._id}>
                <User user={element} onDelete={onDelete} />
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Users;
