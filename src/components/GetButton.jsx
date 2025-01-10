import React from "react";
import { cva } from "class-variance-authority";

const classes = cva("border border-accent text-nowrap md:text-lg text-base px-4 py-1 rounded-full hover:transition-colors ease-in duration-300", {
  variants: {
    variant: {
      primary: "bg-accent text-darkBg hover:bg-accent/25 hover:text-title",
      secondary: "bg-accent/25 text-accent hover:text-title",
    },
  },
});

const GetButton = ({ variant, children }) => {
  return <button className={classes({ variant: variant })}>{children}</button>;
};

export default GetButton;
