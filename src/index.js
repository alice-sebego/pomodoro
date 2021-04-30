import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import * as util from './utils.js';

// Elements of DOM
const $work = document.querySelector("#work");
const $rest = document.querySelector("#rest");
const $start = document.querySelector("#start");
const $pause = document.querySelector("#pause");
const $reset = document.querySelector("#reset");
const $cycleNb = document.querySelector("#cycleNb");
const $year = document.querySelector("#year");
let cycle = 0;


// Add dynamics HTML Elements on the DOM
util.displayYear($year);
document.querySelector('head').appendChild(util.favicon(Icon));
$cycleNb.innerHTML = cycle;

// Chrono
let startminWork = 30;
let timeWork = startminWork * 1;
let minWork = Math.floor(timeWork / 60);
let secWork = timeWork % 60;
let startminRest = 5;
let timeRest = startminRest * 60;
let minRest = Math.floor(timeRest / 60);
let secRest = timeRest % 60;
let checkInterval = false;
let pause = false;


$start.addEventListener("click", () => {

  util.disableInput($start);

  if(checkInterval === false) {

    checkInterval = true;

    minWork = minWork < 10 ? '0' + minWork : minWork;
    secWork = secWork < 10 ? '0' + secWork : secWork;
    $work.innerHTML = `${minWork} : ${secWork}`;

    timeWork --;

    let timer = setInterval(() => {

        if( pause === false && timeWork > 0){

          minWork = Math.floor(timeWork / 60);
          secWork = timeWork % 60;
          minWork = minWork < 10 ? '0' + minWork : minWork;
          secWork = secWork < 10 ? '0' + secWork : secWork;
          $work.innerHTML = `${minWork} : ${secWork}`;

          timeWork --;

        } else if(pause === false && timeRest === 0 && timeWork === 0){
          timeWork = startminWork * 1;
          timeRest = startminRest * 60;
          cycle ++ ;
          $cycleNb.innerHTML = cycle;

          minWork = Math.floor(timeWork / 60);
          secWork = timeWork % 60;
          minWork = minWork < 10 ? '0' + minWork : minWork;
          secWork = secWork < 10 ? '0' + secWork : secWork;
          $work.innerHTML = `${minWork} : ${secWork}`;

          minRest = Math.floor(timeRest / 60);
          secRest = timeRest % 60;
          minRest = minRest < 10 ? '0' + minRest : minRest;
          secRest = secRest < 10 ? '0' + secRest : secRest;
          $rest.innerHTML = `${minRest} : ${secRest}`;
        
        }else if (pause === false && timeWork === 0){
            timeRest --;
            
            minRest = Math.floor(timeRest / 60);
            secRest = timeRest % 60;
            minRest = minRest < 10 ? '0' + minRest : minRest;
            secRest = secRest < 10 ? '0' + secRest : secRest;
            $rest.innerHTML = `${minRest} : ${secRest}`;

        } 
      }, 1000);

      $reset.addEventListener("click", () =>{
        
        util.undisableInput($start);
        clearInterval(timer);
        checkInterval = false;
        timeWork = startminWork * 1;
        timeRest = startminRest * 60;
        minWork = Math.floor(timeWork / 60);
        secWork = timeWork % 60;
        minWork = minWork < 10 ? '0' + minWork : minWork;
        secWork = secWork < 10 ? '0' + secWork : secWork;
        $work.innerHTML = `${minWork} : ${secWork}`;
        minRest = Math.floor(timeRest / 60);
        secRest = timeRest % 60;
        minRest = minRest < 10 ? '0' + minRest : minRest;
        secRest = secRest < 10 ? '0' + secRest : secRest;
        $rest.innerHTML = `${minRest} : ${secRest}`;

      });
  }

});


