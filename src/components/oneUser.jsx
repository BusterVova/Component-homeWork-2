/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from "react";
import api from "../API";
import { Link } from "react-router-dom";
const oneUser = ({ match }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = match.params.id;
  useEffect(() => {
    api.users.getById(userId).then((value) => {
      setUser(value);
      setLoading(true);
    });
  }, []);
  // eslint-disable-next-line multiline-ternary

  return loading ? (
    user?.name ? (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия:{user.profession.name}</h2>
        {user.qualities.map((quality) => (
          <span key={quality._id} className={"badge bg-" + quality.color}>
            {quality.name}
          </span>
        ))}
        <p>completedMeetings:{user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <Link to={`/users/${userId}/edit`}>
          <button>Изменить</button>
        </Link>
      </>
    ) : null
  ) : (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default oneUser;
