import React from "react";
const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/main">
          Main
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/users">
          Users
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
