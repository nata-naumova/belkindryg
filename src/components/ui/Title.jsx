import React from "react";

const Title = ({ title, position }) => {
  return (
    <h2
      className={`text-title lg:text-4xl text-3xl mb-4 ${
        position == "center" ? "text-center" : "text-left"
      }`}
    >
      {title}
    </h2>
  );
};

export default Title;
