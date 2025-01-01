import React from "react";

const Header = () => {
  // Internal Style
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
    padding: "3px 0",
  };
  return (
    <header
      // Internal Style
      style={headerStyle}

      // Inline Style
      // style={{
      //   backgroundColor: "mediumblue",
      //   color: "#fff",
      // }}
    >
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
