/* eslint-disable operator-linebreak */
/* eslint-disable multiline-ternary */
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Qualities from "./qualities";
import { Link } from "react-router-dom";

//
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
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              <td key={column}>
                {columns[column]?.component ? (
                  // eslint-disable-next-line multiline-ternary
                  columns[column].component(item._id)
                ) : // eslint-disable-next-line multiline-ternary
                columns[column].path === "name" ? (
                  <Link to={`/users/${item._id}`}>
                    {_.get(item, columns[column].path)}
                  </Link>
                ) : (
                  _.get(item, columns[column].path)
                )}
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
