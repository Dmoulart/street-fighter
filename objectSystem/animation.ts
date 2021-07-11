import {Sprite} from "./sprite.js";
import {AnimationFrame} from "./animationFrame.js";
import {ANIMATION_FRAME_DURATION} from "../config/config.js";

export class Animation{

    private readonly sprite !:Sprite;

    public readonly frames !:Array<AnimationFrame>;

    private startTime :number = Date.now();

    private lastFrameTimeStamp !:number;
    private currentFrameIndex   :number = 0;

    public constructor(sprite:Sprite ,frames: Array<AnimationFrame>) {
        this.sprite = sprite;
        this.frames = frames;
        this.lastFrameTimeStamp = Date.now();
    }

    public get currentFrame() : AnimationFrame {

        if(this.isTooSoonToChangeFrame()) return this.frames[this.currentFrameIndex];

        if(this.nextFrameIsOutOfBound()) this.currentFrameIndex = -1;

        this.currentFrameIndex ++;

        this.lastFrameTimeStamp = Date.now();

        return this.frames[this.currentFrameIndex];
    }

    private isTooSoonToChangeFrame(): boolean  {
        return Date.now() - this.lastFrameTimeStamp < ANIMATION_FRAME_DURATION;
    }

    private nextFrameIsOutOfBound() : boolean {
        return this.currentFrameIndex + 1 >= this.frames.length;
    }
}