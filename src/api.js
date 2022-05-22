//Base URL
const base_url = "https://api.rawg.io/api/";

const key = "9acc9cd635b040229cabbec6acd5388a";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

//Populer games
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page-size=10`;
//Upcomming games
const upcomming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page-size=10`;
//New games
const new_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page-size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcommingGamesURL = () => `${base_url}${upcomming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
