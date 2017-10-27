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
  
  const base = d3.select("#court-content");
  const canvasEl = base.append("canvas")
    .attr("class", "court-canvas")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  const dataEl = base.append("svg")
  .attr("class", "data-plot")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g");

  const hoverInfo = base.append("div")
    .attr("class", "hover-info")
    .style("opacity", 0);
  
  const ctx = canvasEl.node().getContext("2d");

  new Court(ctx).draw();
  
  initPlayerMenu();

  document.getElementById('display-button').addEventListener('click', () => {
    createShotChart(ctx, canvasEl);
  });
});

function createShotChart(ctx, dataEl) {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = Court.DIM_X * Court.scale,
    height = Court.DIM_Y * Court.scale;

  ctx.clearRect(0, 0, width, height);
  new Court(ctx).draw();
  dataEl.selectAll("*").remove();


  let { player } = getUserInput();
  const currPlayer = NBA.findPlayer(player);
  NBA.stats.shots({ PlayerID: currPlayer.playerId }).then((data) => {
    console.log(data);
    plotPlayerShots(ctx, dataEl, data);
  });
}

function plotPlayerShots(ctx, data) {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = Court.DIM_X * Court.scale,
    height = Court.DIM_Y * Court.scale;

  const base = d3.select("#court-content");

  const playerShots = data.shot_Chart_Detail;
  const playerMadeShots = playerShots.filter(shot => shot.eventType==="Made Shot");
  const playerMissedShots = playerShots.filter(shot => shot.eventType === "Missed Shot");
  const playerMadeShotLocs = playerMadeShots.map((shot) => [shot.locX * nbaStatsScale + courtHoopX, 
                                                    shot.locY * nbaStatsScale + courtHoopY]);
  const playerMissedShotLocs = playerMissedShots.map((shot) => [shot.locX * nbaStatsScale + courtHoopX,
                                                    shot.locY * nbaStatsScale + courtHoopY]);
  
  

  // ctx.lineWidth = 3;                                              
  // playerMadeShotLocs.forEach((shotLoc, idx) => {
  //   ctx.beginPath();
  //   ctx.strokeStyle="#008000";
  //   ctx.arc(shotLoc[0], shotLoc[1], 5, 0, 2*Math.PI);
  //   ctx.stroke();
  // });
  // playerMissedShotLocs.forEach((shotLoc, idx) => {
  //   ctx.beginPath();
  //   ctx.strokeStyle = "#ff0000";
  //   ctx.moveTo(shotLoc[0]-5, shotLoc[1]-5);
  //   ctx.lineTo(shotLoc[0]+5, shotLoc[1]+5);
  //   ctx.moveTo(shotLoc[0]-5, shotLoc[1]+5);
  //   ctx.lineTo(shotLoc[0]+5, shotLoc[1]-5);
  //   ctx.stroke();
  // });
  // ctx.strokeStyle="#000000";
  // ctx.lineWidth = 1; 
}

function getUserInput() {
  let player = document.getElementById('players-input').value;
  let shotChartOptions = {
    player
  };
  return shotChartOptions;
}