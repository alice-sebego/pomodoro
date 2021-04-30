import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import * as util from './utils.js';
import Time from './time.js';

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

// Display time of Work
let startminWork = 30;
let timeWork = startminWork * 1;
let minWork = Math.floor(timeWork / 60);
let secWork = timeWork % 60;
// Display time of Rest
let startminRest = 5;
let timeRest = startminRest * 60;
let minRest = Math.floor(timeRest / 60);
let secRest = timeRest % 60;

const Work = new Time(startminWork, timeWork, minWork, secWork, $work);
const Rest = new Time(startminRest, timeRest, minRest, secRest, $rest);

let checkInterval = false;
let pause = false;

$start.addEventListener("click", () => {

  util.disableInput($start);

  if(checkInterval === false) {

    checkInterval = true;

    Work.displayTime();
    Work.countdown();

    let timer = setInterval(() => {

        if( pause === false && Work.timeTotal > 0){

          Work.displayTime();
          Work.countdown();
          

        } else if(pause === false && Rest.timeTotal === 0 && Work.timeTotal === 0){
          timeWork = startminWork * 1;
          timeRest = startminRest * 60;

          cycle ++ ;
          $cycleNb.innerHTML = cycle;

          Work.displayTime();

          Rest.displayTime();
        
        } else if (pause === false && Work.timeTotal === 0){
            Rest.countdown();
            
            Rest.displayTime();

        } 
      }, 1000);

      $reset.addEventListener("click", () =>{

        util.undisableInput($start);
        clearInterval(timer);
        checkInterval = false;

        timeWork = startminWork * 1;
        timeRest = startminRest * 60;
        
        Work.displayTime();
        
        Rest.displayTime();
      });
  }

});

// minRest = Math.floor(timeRest / 60);
// secRest = timeRest % 60;
// minRest = minRest < 10 ? '0' + minRest : minRest;
// secRest = secRest < 10 ? '0' + secRest : secRest;
// $rest.innerHTML = `${minRest} : ${secRest}`;
