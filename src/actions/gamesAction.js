import axios from "axios";
import { popularGamesURL, newGamesURL, upcommingGamesURL } from "../api";

//Action Creator
const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcommingData = await axios.get(upcommingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcomming: upcommingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
export default loadGames;
