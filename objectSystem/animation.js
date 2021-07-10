import { ANIMATION_FRAME_DURATION } from "../config/config.js";
export class Animation {
    constructor(sprite, frames) {
        this.currentFrameIndex = 1;
        this.startTime = Date.now();
        this._timeElapsedSinceLastFrame = this.startTime;
        this.sprite = sprite;
        this.frames = frames;
    }
    updateElapsedTimeSinceLastFrame() {
        this._timeElapsedSinceLastFrame = Date.now() - this._timeElapsedSinceLastFrame;
    }
    resetElapsedTimeSinceLastFrame() {
        this._timeElapsedSinceLastFrame = Date.now();
    }
    get timeElapsedSinceLastFrame() {
        return this._timeElapsedSinceLastFrame;
    }
    get currentFrame() {
        if (this.timeElapsedSinceLastFrame < ANIMATION_FRAME_DURATION) {
            this.updateElapsedTimeSinceLastFrame();
            console.log(this.timeElapsedSinceLastFrame);
            return this.frames[this.currentFrameIndex];
        }
        if (this.currentFrameIndex + 1 >= this.frames.length) {
            this.currentFrameIndex = -1;
        }
        this.currentFrameIndex++;
        this.resetElapsedTimeSinceLastFrame();
        console.log(this.currentFrameIndex);
        return this.frames[this.currentFrameIndex];
    }
}
Animation.SPRITE_ROW = {
    NO_ACTION: 1
};
