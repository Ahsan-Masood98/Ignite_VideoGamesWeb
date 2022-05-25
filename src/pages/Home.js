import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Actions
import loadGames from "../actions/gamesAction";
//Styling And Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Game from "../components/Game";

const Home = () => {
  //Fetching Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //   //Get The Data back
  const { popular, newGames, upComming } = useSelector((state) => state.games);
  return (
    <GameList>
      <h2>Upcomming Games</h2>
      <Games>
        {upComming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;
export default Home;
