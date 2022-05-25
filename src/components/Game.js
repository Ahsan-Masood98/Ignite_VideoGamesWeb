import React from "react";
//Styling And Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt="game" style={{ width: "30%" }} />
    </div>
  );
};

export default Game;
