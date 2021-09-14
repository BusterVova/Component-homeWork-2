import React, { useState, useEffect } from "react";
import api from "../API";
import Users from "./users";
/*  */

const App = () => {
  const [users, setUsers] = useState([]);
  const handleDelete = (userId) => {
    setUsers(users.filter((item) => item._id !== userId));
  };
  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>{users.length ? <Users users={users} onDelete={handleDelete} /> : null}</>
  );
};

export default App;
