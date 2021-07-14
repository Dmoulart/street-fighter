import { ACTION_MINIMUM_DURATION, ANIMATION_FRAME_DURATION } from "../config/config.js";
import { NOT_STARTED } from "../simulation/timable.js";
export class Animation {
    constructor(sprite, frames) {
        this.duration = ACTION_MINIMUM_DURATION;
        this.isRunning = false;
        this.startTime = NOT_STARTED;
        this.lastFrameTimeStamp = NOT_STARTED;
        this.currentFrameIndex = 0;
        this.sprite = sprite;
        this.frames = frames;
    }
    start() {
        this.startTime = Date.now();
        this.lastFrameTimeStamp = Date.now();
    }
    stop() {
        this.isRunning = true;
    }
    reset() {
        this.startTime = NOT_STARTED;
        this.lastFrameTimeStamp = NOT_STARTED;
        return this;
    }
    isTooSoonToChangeFrame() {
        return this.timeElapsedSinceLastFrame < ANIMATION_FRAME_DURATION;
    }
    nextFrameIsOutOfBound() {
        return this.currentFrameIndex + 1 >= this.frames.length;
    }
    get currentFrame() {
        if (this.isTooSoonToChangeFrame()
            || !this.hasStarted)
            return this.frames[this.currentFrameIndex];
        if (this.nextFrameIsOutOfBound())
            this.currentFrameIndex = -1;
        this.currentFrameIndex++;
        this.lastFrameTimeStamp = Date.now();
        return this.frames[this.currentFrameIndex];
    }
    get hasStarted() {
        return this.startTime !== NOT_STARTED;
    }
    get timeElapsedSinceLastFrame() {
        return Date.now() - this.lastFrameTimeStamp;
    }
    get elapsedTime() {
        return Date.now() - this.startTime;
    }
    get isDone() {
        return this.elapsedTime >= this.duration;
    }
    get hasNotStartedYet() {
        return this.startTime === NOT_STARTED;
    }
}
