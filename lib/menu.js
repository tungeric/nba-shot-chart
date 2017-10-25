const NBA = require("nba");

export const initPlayerMenu = function initPlayerMenu() {
  const allPlayers = NBA.players;
  const playerList = document.getElementById('players-input');
  let opt = "";

  for (let i = 0; i < allPlayers.length; i++) {
    opt = document.createElement('option');
    opt.innerHTML = allPlayers[i].fullName;
    opt.value = allPlayers[i].fullName;
    playerList.appendChild(opt);
  }
};
  