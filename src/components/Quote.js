import React from "react";

const Quote = props => {
  const { className, imgClass, image, author, quote } = props;

  return (
    <div className={`quote ${className}`}>
      <img className={imgClass} src={image} alt={quote} />
      <h2>"{quote}"</h2>
      <h3>{author}</h3>
      <br />
      <hr />
    </div>
  );
};

export default Quote;
