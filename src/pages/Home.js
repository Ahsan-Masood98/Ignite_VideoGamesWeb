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
  //Fetching Games and assign it to the state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get The Data back or Extract from the state
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
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
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

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
