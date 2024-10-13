import React from "react";

const MyContainer = ({ children }) => {
  return (
    <section className="container mx-auto px-3 lg:px-0">{children}</section>
  );
};

export default MyContainer;
