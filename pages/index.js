import React from "react";
import images from "../components/utilities/images";

const style = {
  main: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    margin: "0 4rem"
  },
  image: {
    width: "100%"
  }
};

const Homepage = () => {
  return (
    <div style={style.main}>
      <header>
        <h1>Edgar Cuarezma</h1>
      </header>
      <img style={style.image} src={`../images/home/${images.home}`} />
      <h2>Fine Art Illustration</h2>
    </div>
  );
};

export default Homepage;
