import React from "react";

const Quote = props => {
  const { className, image, author, quote } = props;

  return (
    <div className="quote">
      <img className={`${className}`} src={image} />
      <h2>"{quote}"</h2>
      <h3>{author}</h3>
      <br />
      <hr />
    </div>
  );
};

export default Quote;
