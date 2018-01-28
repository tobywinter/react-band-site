import React from "react";
import "./Button.css";

const Button = props => {
  const { label, className, handleClick } = props;

  return (
    <div className="buttons">
      <button className={className} id={label} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
