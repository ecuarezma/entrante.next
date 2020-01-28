import React from "react";

const Card = props => {
  return (
    <div>
      <p>title</p>
      <img src={props.src} />
      <p>medium</p>
    </div>
  );
};

export default Card;
