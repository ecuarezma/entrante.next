import React from "react";
import image from "../components/images";

const Homepage = () => {
  return (
    <div>
      <header>
        <h1>Edgar Cuarezma</h1>
      </header>
      <img src={`../images/home/${image.home}`} />
      <h2>Fine Art Illustration</h2>
    </div>
  );
};

export default Homepage;
