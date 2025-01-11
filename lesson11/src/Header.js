import React from "react";

const Header = ({ title = "Groceries @Dagon"}) => {
  // Internal Style
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
    padding: "5px 10px",
  };
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
