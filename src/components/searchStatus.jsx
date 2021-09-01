import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ users }) => {
  const searchClasses = "badge bg-";

  const ClassChanger = () => {
    let titleclasses = searchClasses;
    return (titleclasses += users.length === 0 ? "danger" : "primary");
  };

  const counter = () => {
    // переменная а не функция
    return users.length === 1
      ? `${users.length} человек тусанёт с тобой сегодня`
      : users.length > 4
      ? `${users.length} человек тусанёт с тобой сегодня`
      : users.length === 0
      ? "Никто с тобой не тусанет"
      : `${users.length} человека тусанут с тобой сегодня`;
  };
  return (
    <h2>
      <span className={ClassChanger()}>{counter()}</span>
    </h2>
  );
};
SearchStatus.propTypes = {
  users: PropTypes.array,
};
export default SearchStatus;
