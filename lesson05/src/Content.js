// import React from "react";
import React, {useState} from "react";

const Content = () => {
  // State to store the message
  const [message, setMessage] = useState("");

  const nameChange = function () {
    const names = ["Mandalay", "Yangon", "Myanmar"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const handleClick = () => {
    const msg = "You clicked it.";
    console.log(msg);
    setMessage(msg); // Updates the message to display in the browser
  }

  const handleClick2 = (name) => {
    const msg = `${name} was clicked!`;
    console.log(msg);
    setMessage(msg);
  }

  const handleClick3 = (e) => {
    const msg = `Event type: ${e.type}, Button text: ${e.target.innerText}`;
    console.log(e)
    // console.log(e.target)
    // console.log(e.target.innerText)
    console.log(msg);
    setMessage(msg);
  }

  return (
    <main>
      {/* <p>Hello {nameChange()}!</p> */}
      <p onDoubleClick={handleClick}>Hello {nameChange()}!</p>
      {/* <p>{new Date().getFullYear()}</p> */}
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Rangoon')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
      {/* Display the current message */}
      <p style={{color: "blue", fontWeight: "bold"}}>{message}</p>
    </main>
  );
};

export default Content;

// You can style the <p> displaying the message further using inline styles or a CSS class. 
// Create a separate CSS file, for example, Content.css.
// Import the Content.css file into your Content.js React component. import "./Content.css";