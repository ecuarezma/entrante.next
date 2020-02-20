import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";

const Card = props => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });

  let display = isLoading ? (
    <p>Loading</p>
  ) : (
    <div className={classes.Card}>
      <img src={props.src} />
    </div>
  );

  return display;
};

export default Card;
