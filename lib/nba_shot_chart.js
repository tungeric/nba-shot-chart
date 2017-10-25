const NBA = require("nba");
import { initPlayerMenu } from './menu';
import Court from './court.js';
// const curry = NBA.findPlayer('Stephen Curry');
// console.log(curry);
// console.log(NBA.players);
// NBA.stats.shots({ PlayerID: curry.playerId }).then((curryShots) => {
//   console.log(curryShots);
// });


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = Court.DIM_X * Court.scale + Court.START_X;
  canvasEl.height = Court.DIM_Y * Court.scale + Court.START_Y;
  const ctx = canvasEl.getContext("2d");
  new Court(canvasEl, ctx).draw();
  
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