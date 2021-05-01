export default class Time{

    constructor(startmin, time, min, sec, element){

        this.startmin = startmin;
        this.time = time;
        this.min = min;
        this.sec = sec;
        this.element = element;

    }

    get timeTotal(){

        return this.time;
    }

    displayTime(){
 
        this.min = Math.floor(this.time / 60);
        this.sec = this.time % 60;
        this.min = this.min < 10 ? '0' + this.min : this.min;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
        this.element.innerHTML = `${this.min} : ${this.sec}`;
        
        return this.element.innerHTML;
    }

    countdown(){
        this.time --;
    }

}