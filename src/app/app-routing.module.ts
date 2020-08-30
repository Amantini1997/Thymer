import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CountdownComponent } from './countdown/countdown/countdown.component';
import { RepeatableTimerComponent } from './repeatable-timer/repeatable-timer/repeatable-timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch/stopwatch.component';

const routes: Routes = [
    {
        path: 'countdown',
        component: CountdownComponent
    },
    {
        path: 'stopwatch',
        component: StopwatchComponent
    },
    {
        path: 'repeatable-timer',
        component: RepeatableTimerComponent
    },
    {
        path: '',
        redirectTo: 'repeatable-timer',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}