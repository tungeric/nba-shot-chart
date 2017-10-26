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
const nbaStatsScale = Court.scale / 10;
const courtHoopX = Court.DIM_X * Court.scale / 2;
const courtHoopY = Court.baselineToBackboard + Court.backboardToRim + Court.rimDiameter / 2;


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
  NBA.stats.shots({ PlayerID: currPlayer.playerId }).then((data) => {
    plotPlayerShots(ctx, data);
  });
}

function plotPlayerShots(ctx, data) {

  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = Court.DIM_X * Court.scale,
    height = Court.DIM_Y * Court.scale;
  const base = d3.select("#content");
  const shotPlotEl = base.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
      .append("circle")
        .attr('r', 7)
          .classed("hidden", true);

  const playerShots = data.shot_Chart_Detail;
  const playerShotLocs = playerShots.map((shot) => [shot.locX * nbaStatsScale + courtHoopX, 
                                                    shot.locY * nbaStatsScale + courtHoopY]);
  playerShotLocs.forEach((shotLoc, idx) => {
    ctx.beginPath();
    ctx.arc(shotLoc[0], shotLoc[1], 5, 0, 2*Math.PI);
    ctx.stroke();
  });
}

function getUserInput() {
  let player = document.getElementById('players-input').value;
  let shotChartOptions = {
    player
  };
  return shotChartOptions;
}