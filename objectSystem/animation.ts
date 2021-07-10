import {Sprite} from "./sprite.js";
import {AnimationFrame} from "./animationFrame.js";
import {ANIMATION_FRAME_DURATION} from "../config/config.js";

export class Animation{

    private readonly sprite !:Sprite;

    public readonly frames !:Array<AnimationFrame>;

    private currentFrameIndex :number = 1;

    private startTime :number = Date.now();

    private _timeElapsedSinceLastFrame:number = this.startTime;

    public static readonly SPRITE_ROW = {
        NO_ACTION: 1
    }

    public constructor(sprite:Sprite,frames: Array<AnimationFrame>) {
        this.sprite = sprite;
        this.frames = frames;
    }
    public updateElapsedTimeSinceLastFrame(){
        this._timeElapsedSinceLastFrame = Date.now() - this._timeElapsedSinceLastFrame;
    }
    public resetElapsedTimeSinceLastFrame(){
        this._timeElapsedSinceLastFrame = Date.now();
    }
    public get timeElapsedSinceLastFrame(){
        return this._timeElapsedSinceLastFrame;
    }
    public get currentFrame() : AnimationFrame {

        if(this.timeElapsedSinceLastFrame < ANIMATION_FRAME_DURATION) {
            this.updateElapsedTimeSinceLastFrame();
            console.log(this.timeElapsedSinceLastFrame)
            return this.frames[this.currentFrameIndex];
        }


        if(this.currentFrameIndex + 1 >= this.frames.length) {
            this.currentFrameIndex = -1;
        }

        this.currentFrameIndex ++;

        this.resetElapsedTimeSinceLastFrame();

        console.log(this.currentFrameIndex)
        return this.frames[this.currentFrameIndex];
    }

}