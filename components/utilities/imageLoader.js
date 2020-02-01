import React from "react";
import images from "./images";
import Card from "../Card";
import uuid from "uuid/v4";

export default function imageLoader(page) {
  let cards = images[page].map(image => (
    <Card src={`../images/${page}/${image}`} key={uuid()} />
  ));
  return cards;
}
