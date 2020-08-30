import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'repeatable-timer',
  templateUrl: './repeatable-timer.component.html',
  styleUrls: ['./repeatable-timer.component.scss']
})
export class RepeatableTimerComponent implements OnInit {

  timerIsActive: boolean;
  timerIsRunning: boolean;
  time: string;

  constructor() {
    this.timerIsActive = false;
    this.timerIsRunning = false;
    this.time = "00:00";
  }

  ngOnInit(): void {
  }

  toggleTimer() {
    this.timerIsRunning = !this.timerIsRunning;
    this.timerIsActive = true;
  }

  resetTimer() {
    this.timerIsRunning = false;
    this.timerIsActive = false;
  }

}
