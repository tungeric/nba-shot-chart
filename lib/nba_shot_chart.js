const NBA = require("nba");
import { initPlayerMenu } from './menu';
import Court from './court.js';
import * as d3 from 'd3';

// const curry = NBA.findPlayer('Stephen Curry');
// console.log(curry);
// console.log(NBA.players);
// NBA.stats.shots({ PlayerID: curry.playerId }).then((curryShots) => {
//   console.log(curryShots);
// });


document.addEventListener("DOMContentLoaded", () => {
  // const canvasEl = document.getElementById("canvas");
  // canvasEl.width = Court.DIM_X * Court.scale + Court.START_X;
  // canvasEl.height = Court.DIM_Y * Court.scale + Court.START_Y;
  // const ctx = canvasEl.getContext("2d");
  // new Court(ctx).draw();

  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = Court.DIM_X * Court.scale,
    height = Court.DIM_Y * Court.scale;
  
  const base = d3.select("#content");
  const canvasEl = base.append("canvas")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
  
  const ctx = canvasEl.node().getContext("2d");

  new Court(ctx).draw();
  
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  
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