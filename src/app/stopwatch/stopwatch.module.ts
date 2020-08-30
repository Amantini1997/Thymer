import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopwatchRoutingModule } from './stopwatch-routing.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


@NgModule({
  declarations: [StopwatchComponent],
  imports: [
    CommonModule,
    StopwatchRoutingModule
  ]
})
export class StopwatchModule { }
