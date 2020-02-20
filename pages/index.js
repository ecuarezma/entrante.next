import React, { useState, useEffect } from "react";
import images from "../components/utilities/images";

const style = {
  main: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    margin: "calc(75px + 4rem) 4rem"
  },
  image: {
    width: "100%"
  }
};

const Homepage = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });

  let display = isLoading ? (
    <div className="isLoading">
      <p>Loading...</p>
    </div>
  ) : (
    <header style={style.main}>
      <h1>Edgar Cuarezma</h1>
      <img style={style.image} src={`../images/home/${images.home}`} />
      <h2>Fine Art Illustration</h2>
    </header>
  );

  return display;
};

export default Homepage;
