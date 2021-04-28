import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './utils.js';

// Insert a favicon
const component = () => {

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = Icon;

    return link;
}

document.querySelector('head').appendChild(component());

// Elements of DOM
const $work = document.querySelector("#work");
const $rest = document.querySelector("#rest");
const $start = document.querySelector("#start");
const $pause = document.querySelector("#pause");
const $reset = document.querySelector("#reset");
const $cycleNb = document.querySelector("#cycleNb"); 
// chrono
let startminWork = 30;
let timeWork = startminWork * 60;
let startminRest = 5;
let timeRest = startminRest * 60;

// Countdown for Work
const countdownWork = () => {
  
  const min = Math.floor(timeWork / 60);
  let sec = timeWork % 60;

  sec = sec < 10 ? '0' + sec : sec;

  $work.innerHTML = `${min} : ${sec}`;

  if(timeWork > 0){
    timeWork --;
  } else {
    $work.innerHTML = `30 : 00`;
    setInterval(countdownRest, 1000);
  }
	
}

// Countdown for Rest
const countdownRest = () => {
  
  const min = Math.floor(timeRest / 60);
  let sec = timeRest % 60;

  sec = sec < 10 ? '0' + sec : sec;

  $rest.innerHTML = `${min} : ${sec}`;

  if(timeRest > 0){
    timeRest --;
  } else {
    $rest.innerHTML = `05 : 00`;
    setInterval(countdownWork, 1000);
  }
	
}

$start.addEventListener("click", () => {
  setInterval(countdownWork, 1000);
  $start.disabled = "true";
});

