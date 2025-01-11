import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import Font Awesome Trash Icon

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    // <li className="item" key={item.id}>
    <li className="item">
      {/* Checkbox with toggle functionality */}
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={
          item.checked
            ? {
                textDecoration: "line-through",
              }
            : null
        }
      >
        {item.item}
      </label>
      {/* Trash icon with delete functionality */}
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        style={{ cursor: "pointer", marginLeft: "10px" }}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
