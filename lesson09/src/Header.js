import React from "react";

// const Header = (props) => { // using props then props.title
// const Header = ({ title }) => { // using destructuring then title
const Header = ({ title = "Groceries @Dagon"}) => { // using default props then title
  // Internal Style
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
    padding: "5px 10px",
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
      {/* <h1>Groceries List</h1> */}
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Groceries List",
// };

export default Header;
