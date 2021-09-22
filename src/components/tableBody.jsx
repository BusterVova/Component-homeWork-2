import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Qualities from "./qualities";
const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => {
            if (column === "qualities") {
              return (
                <Qualities
                  key={column}
                  qualities={_.get(item, columns[column].path)}
                />
              );
            }
            return (
              <td key={column}>
                {columns[column].component || _.get(item, columns[column].path)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
TableBody.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.object.isRequired,
};
export default TableBody;
