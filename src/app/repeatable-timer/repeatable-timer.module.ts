import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepeatableTimerRoutingModule } from './repeatable-timer-routing.module';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { RepeatableTimerComponent } from './repeatable-timer/repeatable-timer.component';


@NgModule({
  declarations: [RepeatableTimerComponent],
  imports: [
    CommonModule,
    MatButtonToggle, 
    RepeatableTimerRoutingModule
  ]
})
export class RepeatableTimerModule { }
