import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import api from "../API";
import Users from "./users";
/*  */

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll() || []);
  const handleDelete = (userId) => {
    setUsers(users.filter((item) => item._id !== userId));
  };

  return (
    <>
      <SearchStatus users={users} />
      {users.length ? <Users users={users} onDelete={handleDelete} /> : null}
    </>
  );
};

export default App;
