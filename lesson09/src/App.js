import "./App.css";
import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  // const nameChange = function () {
  //   const names = ["Mandalay", "Yangon", "Myanmar"];
  //   const name = Math.floor(Math.random() * 3);
  //   return names[name];
  // };

  // from Content.js
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
  // End of Content.js

  return (
    <div className="App">
      {/* <Header title="Groceries List"/> */}
      <Header />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;