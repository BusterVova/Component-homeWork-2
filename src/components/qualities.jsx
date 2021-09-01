import React from "react";
import PropTypes from "prop-types";
const qualityClasses = "badge bg-";
const Qualities = ({ qualities }) => {
  return (
    <>
      <td>
        {qualities.map((quality) => {
          return (
            <span
              key={quality._id}
              className={`${qualityClasses}${quality.color}`}
            >
              {`${quality.name}`}
            </span>
          );
        })}
      </td>
    </>
  );
};
Qualities.propTypes = {
  qualities: PropTypes.array,
};

export default Qualities;
