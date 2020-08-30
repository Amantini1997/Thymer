import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepeatableTimerComponent } from './repeatable-timer/repeatable-timer.component';


const routes: Routes = [{
  path: '',
  component: RepeatableTimerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepeatableTimerRoutingModule { }
