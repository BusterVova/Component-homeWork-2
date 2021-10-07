/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from "react";
import api from "../API";
import Users from "./users";
const App = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const handleDelete = (userId) => {
    setUsers(users.filter((item) => item._id !== userId));
  };
  useEffect(() => {
    // api.users.getById("67rdca3eeb7f6fgeed471815").then((data) => {
    //   console.log(data);
    // });
    api.users.fetchAll().then((data) => {
      setUsers(data);
      setLoaded(true);
    });
  }, []);
  return loaded ? (
    <>{users.length ? <Users users={users} onDelete={handleDelete} /> : null}</>
  ) : (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default App;
