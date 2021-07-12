import { ANIMATION_FRAME_DURATION } from "../config/config.js";
export class Animation {
    constructor(sprite, frames) {
        this.startTime = Animation.NOT_STARTED;
        this.lastFrameTimeStamp = Animation.NOT_STARTED;
        this.currentFrameIndex = 0;
        this.sprite = sprite;
        this.frames = frames;
    }
    start() {
        this.startTime = Date.now();
        this.lastFrameTimeStamp = Date.now();
        return this;
    }
    stop() {
        this.startTime = Animation.NOT_STARTED;
        return this;
    }
    reset() {
        this.startTime = Animation.NOT_STARTED;
        this.lastFrameTimeStamp = Animation.NOT_STARTED;
        return this;
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
    isTooSoonToChangeFrame() {
        return this.timeElapsedSinceLastFrame < ANIMATION_FRAME_DURATION;
    }
    nextFrameIsOutOfBound() {
        return this.currentFrameIndex + 1 >= this.frames.length;
    }
    get hasStarted() {
        return this.startTime !== Animation.NOT_STARTED;
    }
    get timeElapsedSinceLastFrame() {
        return Date.now() - this.lastFrameTimeStamp;
    }
}
Animation.NOT_STARTED = -1;
