import { a } from "framer-motion/client";
import React from "react";

const ButtonCustom = ({ name, type, handleClick, link }) => {
  return type == "button" ? (
    <button
      className="text-title text-nowrap md:text-lg text-base border bg-accent border-accent hover:bg-accent px-8 py-2 rounded-2xl"
      onClick={handleClick}
    >
      {name}
    </button>
  ) : (
    <a
      href={link}
      className="text-title text-nowrap md:text-lg text-base border bg-accent border-accent hover:bg-accent px-8 py-2 rounded-2xl w-max"
    >
      {name}
    </a>
  );
};

export default ButtonCustom;
