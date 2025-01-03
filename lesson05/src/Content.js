// import React from "react";
import React from "react";

const Content = () => {
  const nameChange = () => {
    const names = ["Mandalay", "Yangon", "Myanmar"];
    const name = Math.floor(Math.random() * names.length);
    return names[name];
  };

  const handleClick = () => {
    console.log('You clicked it');
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked!`);
  }

  const handleClick3 = (e) => {
    // console.log(e)
    // console.log(e.target)
    console.log(e.target.innerText)
  }

  return (
    <main>
      {/* <p>Hello {nameChange()}!</p> */}
      <p onDoubleClick={handleClick}>Hello {nameChange()}!</p>
      {/* <p>{new Date().getFullYear()}</p> */}
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2('Rangoon')}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;