export default class Time{

    constructor(startmin, time, min, sec, elementHTML){

        this.startmin = startmin;
        this.time = time;
        this.min = min;
        this.sec = sec;
        this.elementHTML = elementHTML;

    }

    get timeTotal(){

        return this.time;
    }

    displayTime(){
 
        this.min = Math.floor(this.time / 60);
        this.sec = this.time % 60;
        this.min = this.min < 10 ? '0' + this.min : this.min;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
        this.elementHTML.innerHTML = `${this.min} : ${this.sec}`;
        
        return this.elementHTML.innerHTML;
    }

    countdown(){
        this.time --;
    }

}

