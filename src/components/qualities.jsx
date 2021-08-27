import React from "react";
let qualityClasses = "badge bg-";
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

export default Qualities;
