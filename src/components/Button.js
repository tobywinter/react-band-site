import React from "react";

const Button = props => {
  const { label, className, handleClick } = props;

  return (
    <button className={className} id={label} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
