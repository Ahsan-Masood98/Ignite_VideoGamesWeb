const initState = {
  popular: [],
  newGames: [],
  upComming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upComming: action.payload.upcomming,
      };
    default:
      return { ...state };
  }
};
export default gamesReducer;
