import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

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
