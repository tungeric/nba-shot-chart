const NBA = require("nba");
import { initPlayerMenu } from './menu';

// const curry = NBA.findPlayer('Stephen Curry');
// console.log(curry);
// console.log(NBA.players);
// NBA.stats.shots({ PlayerID: curry.playerId }).then((curryShots) => {
//   console.log(curryShots);
// });


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  const ctx = canvasEl.getContext("2d");
  
  initPlayerMenu();

  document.getElementById('display-button').addEventListener('click', () => {
    createShotChart(ctx, canvasEl);
  });
});

function createShotChart(ctx, canvasEl) {
  let { player } = getUserInput();
  const currPlayer = NBA.findPlayer(player);
  NBA.stats.shots({ PlayerID: currPlayer.playerId }).then((playerShots) => {
    console.log(playerShots);
  });
}

function getUserInput() {
  let player = document.getElementById('players-input').value;
  let shotChartOptions = {
    player
  };
  return shotChartOptions;
}