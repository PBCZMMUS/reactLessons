import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react"; // Add this import statement

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef(); // Add this line
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}  // Add this line
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button 
        type="submit" 
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}> // Add this line
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
