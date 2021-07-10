import { ANIMATION_FRAME_DURATION } from "../config/config.js";
export class Animation {
    constructor(sprite, frames) {
        this.startTime = Date.now();
        this.currentFrameIndex = 0;
        this.sprite = sprite;
        this.frames = frames;
        this.lastFrameTimeStamp = Date.now();
    }
    get currentFrame() {
        if (Date.now() - this.lastFrameTimeStamp < ANIMATION_FRAME_DURATION) {
            return this.frames[this.currentFrameIndex];
        }
        if (this.currentFrameIndex + 1 >= this.frames.length) {
            this.currentFrameIndex = -1;
        }
        this.currentFrameIndex++;
        this.lastFrameTimeStamp = Date.now();
        return this.frames[this.currentFrameIndex];
    }
}
