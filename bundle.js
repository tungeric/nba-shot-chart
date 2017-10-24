/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map