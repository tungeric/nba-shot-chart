// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';
// import nba from 'nba.js';

// nba.stats.allPlayers({ IsOnlyCurrentSeason: 1 })
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const allPlayersUrl = 'https://stats.nba.com/stats/commonallplayers?LeagueID=00&Season=2017-18&IsOnlyCurrentSeason=1';
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function (data) {
  console.log(data);
};
httpRequest.open('GET', allPlayersUrl);
httpRequest.send();
// fetch(allPlayersUrl, {credentials: 'include'})
//   .then(response => response.json())
//   .then(contents => console.log(contents));
// const allPlayersUrl = `https://api.iextrading.com/1.0/tops`;

document.addEventListener("DOMContentLoaded", () => {
  // let store = configureStore();
  // const root = document.getElementById('app');
  // ReactDOM.render(<App store={ store }/>, root);
  // Vanilla
  

});