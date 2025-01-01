import React from "react";

const Content = () => {
  const nameChange = function () {
    const names = ["Mandalay", "Yangon", "Myanmar"];
    const name = Math.floor(Math.random() * 3);
    return names[name];
  };

  return (
    <main>
      <p>Hello {nameChange()}!</p>
      {/* <p>{new Date().getFullYear()}</p> */}
    </main>
  );
};

export default Content;
