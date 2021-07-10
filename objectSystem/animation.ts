import {Sprite} from "./sprite.js";
import {AnimationFrame} from "./animationFrame.js";
import {ANIMATION_FRAME_DURATION} from "../config/config.js";

export class Animation{

    private readonly sprite !:Sprite;

    public readonly frames !:Array<AnimationFrame>;

    private startTime :number = Date.now();

    //In order to start the animation
    private lastFrameTimeStamp !:number;
    private currentFrameIndex   :number = 0;

    public static readonly SPRITE_ROW = {
        NO_ACTION: 1
    }

    public constructor(sprite:Sprite,frames: Array<AnimationFrame>) {
        this.sprite = sprite;
        this.frames = frames;
        this.lastFrameTimeStamp = Date.now();
    }

    public get currentFrame() : AnimationFrame {
        if(Date.now() - this.lastFrameTimeStamp < ANIMATION_FRAME_DURATION) {
            return this.frames[this.currentFrameIndex];
        }

        if(this.currentFrameIndex + 1 >= this.frames.length) {
            this.currentFrameIndex = -1;
        }

        this.currentFrameIndex ++;

        this.lastFrameTimeStamp = Date.now();

        return this.frames[this.currentFrameIndex];
    }

}