import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import Font Awesome Trash Icon

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item Two",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  // Toggle checkbox checked state
  const handleCheck = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      localStorage.setItem("shoppinglist", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  /*
// Toggle checkbox checked state
// check in Components -> Content with check or uncheck
const listItems = items.map((item) =>
  item.id === id ? { ...item, checked: !item.checked } : item
);
setItems(listItems);
*/

  // Delete an item
  const handleDelete = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("shoppinglist", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  /*
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    */

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
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
                /*
              style={{
                textDecoration: item.checked ? "line-through" : "none",
              }}
              */
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
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
