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
let startminWork = 15;
let timeWork = startminWork * 1;
let minWork = Math.floor(timeWork / 60);
let secWork = timeWork % 60;
// Display time of Rest
let startminRest = 5;
let timeRest = startminRest * 1;
let minRest = Math.floor(timeRest / 60);
let secRest = timeRest % 60;

let Work = new Time(startminWork, timeWork, minWork, secWork, $work);
let Rest = new Time(startminRest, timeRest, minRest, secRest, $rest);
Work.displayTime();
Rest.displayTime();

let checkInterval = false;
let pause = false;

$start.addEventListener("click", () => {

  util.disableInput($start);

  if(checkInterval === false) {

    checkInterval = true;

    Work.countdown();
    Work.displayTime();

    let timer = setInterval(() => {

        if( pause === false && Work.timeTotal > 0){
          console.log("work");
          Work.countdown();
          Work.displayTime();
          

        } else if(pause === false && Rest.timeTotal === 0 && Work.timeTotal === 0){
          
          startminWork = 30;
          startminRest = 5;
          timeWork = startminWork * 60;
          timeRest = startminRest * 60;

          cycle ++ ;
          $cycleNb.innerHTML = cycle;

          Work = new Time(startminWork, timeWork, minWork, secWork, $work);
          Rest = new Time(startminRest, timeRest, minRest, secRest, $rest);
         
          Work.displayTime();
          Rest.displayTime();
          

        } else if (pause === false && Work.timeTotal === 0){
            console.log("rest");
            Rest.countdown();
            Rest.displayTime();

        } 
      }, 1000);

      $reset.addEventListener("click", () =>{

        util.undisableInput($start);
        clearInterval(timer);
        checkInterval = false;
        
        cycle = 0;
        $cycleNb.innerHTML = cycle;

        startminWork = 30;
        startminRest = 5;
        timeWork = startminWork * 60;
        timeRest = startminRest * 60;

        Work = new Time(startminWork, timeWork, minWork, secWork, $work);
        Rest = new Time(startminRest, timeRest, minRest, secRest, $rest);
        Work.displayTime();
        Rest.displayTime();
      });

    
  } else {
    return;
  }

});

$pause.addEventListener("click", () => {

  if(!pause){
    $pause.value = "Play";
  } else if(pause){
    $pause.value = "Pause"
  }

  pause = !pause;
});

