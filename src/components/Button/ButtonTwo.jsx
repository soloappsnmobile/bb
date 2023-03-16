import React from "react";
import './Button.css'

const ButtonTwo = ({ title }) => {
  return (
    <button className="button2 shadow-lg">
      {title}
    </button>
  );
};

export default ButtonTwo;
