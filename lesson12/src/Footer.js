import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      {/* <p>{ length } List Items</p> */}
      <p>{ length } List {length === 1 || length === 0 ? "Item" : "Items"}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
