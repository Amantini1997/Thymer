import { Component, OnInit } from '@angular/core';
import Timer from 'src/app/timer';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  timer: Timer;
  timerIsActive: boolean;
  timerIsRunning: boolean;
  time: string;
  timeoutThread: any;

  constructor() {
    this.timerIsActive = false;
    this.timerIsRunning = false;
    this.time = "00:00";
  }

  ngOnInit(): void {
  }

  toggleTimer() {
    if (!this.timerIsActive) {
      this.timer = new Timer("00:3");
      this.timer.play();
      this.startTimeoutThread();
    } else {
      this.timer.toggleTimer();
    }

    this.timerIsRunning 
      ? this.stopTimeoutThread()
      : this.startTimeoutThread();
    this.timerIsRunning = !this.timerIsRunning;
    this.timerIsActive = true;
  }

  resetTimer() {
    this.timerIsRunning = false;
    this.timerIsActive = false;
  }

  startTimeoutThread() {
    this.timeoutThread = setInterval(() => console.log(this.timer.getRemainingTimeInMilliseconds()), 100);
  }

  stopTimeoutThread(): any {
    return clearInterval(this.timeoutThread);
  }
}