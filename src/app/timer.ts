export default class Timer {

    readonly includeMilliseconds: boolean;
    seconds: number = 0;
    minutes: number = 0;
    hours: number = 0;

    timerDurationInMilliseconds: number;
    elapsedTimeInMilliseconds: number = 0;
    lastElapsedTimeCheckpoint: Date;

    isRunning: boolean = false;
    onEnd: Function;

    constructor ( 
        time: String = "00:00",
        onEnd: Function = null,
        includeMilliseconds: boolean = false,
    ) {
        this.onEnd = onEnd || this.defaultOnEnd;
        this.includeMilliseconds = includeMilliseconds;
        this.setTime(time);
    }

    getElapsedTimeInMilliseconds(): number {
        this.setElapsedTime();
        return this.elapsedTimeInMilliseconds;
    }

    getRemainingTimeInMilliseconds(): number {
        this.setElapsedTime();
        return this.timerDurationInMilliseconds - this.elapsedTimeInMilliseconds;
    }

    setTime(time: String): void {
        const timeComponents = time.split(":");
        this.seconds = +timeComponents.pop();
        this.minutes = +timeComponents.pop();      
        if (timeComponents.length) {
            this.seconds = +timeComponents.pop();  
        }    
        this.timerDurationInMilliseconds = ((this.hours * 60) + this.minutes * 60) + this.seconds * 1000;
    }

    private setElapsedTime(): void {
        if (!this.isRunning) return;
        const now = new Date();
        this.elapsedTimeInMilliseconds += this.lastElapsedTimeCheckpoint.getTime() - now.getTime();
        this.lastElapsedTimeCheckpoint = now;
    }

    private defaultOnEnd() {
        console.log("Timer Ended");
    }

    // initialize Timer
    play(): void {
        this.lastElapsedTimeCheckpoint = new Date();
        this.isRunning = true;
    }

    toggleTimer(): number {
        this.setElapsedTime();
        if (!this.isRunning) {
            this.lastElapsedTimeCheckpoint = new Date();
        }
        this.isRunning = !this.isRunning;
        return this.elapsedTimeInMilliseconds;
    }
}