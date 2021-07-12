import {Sprite} from "./sprite.js";
import {AnimationFrame} from "./animationFrame.js";
import {ANIMATION_FRAME_DURATION} from "../config/config.js";

export class Animation{

    private readonly sprite !:Sprite;
    public  readonly frames !:Array<AnimationFrame>;

    public static readonly NOT_STARTED :number = -1;

    private startTime           :number        = Animation.NOT_STARTED;
    private lastFrameTimeStamp  :number        = Animation.NOT_STARTED;

    private currentFrameIndex   :number        = 0;

    public constructor(sprite:Sprite ,frames: Array<AnimationFrame>) {
        this.sprite = sprite;
        this.frames = frames;
    }

    public start():Animation{
        this.startTime          = Date.now();
        this.lastFrameTimeStamp = Date.now();
        return this
    }
    public stop():Animation{
        this.startTime          = Animation.NOT_STARTED;
        return this;
    }
    public reset():Animation{
        this.startTime          = Animation.NOT_STARTED;
        this.lastFrameTimeStamp = Animation.NOT_STARTED;
        return this;
    }
    public get currentFrame() : AnimationFrame {

        if(this.isTooSoonToChangeFrame()
        || !this.hasStarted) return this.frames[this.currentFrameIndex];

        if(this.nextFrameIsOutOfBound()) this.currentFrameIndex = -1;

        this.currentFrameIndex ++;

        this.lastFrameTimeStamp = Date.now();

        return this.frames[this.currentFrameIndex];
    }

    private isTooSoonToChangeFrame(): boolean  {
        return this.timeElapsedSinceLastFrame < ANIMATION_FRAME_DURATION;
    }

    private nextFrameIsOutOfBound() : boolean {
        return this.currentFrameIndex + 1 >= this.frames.length;
    }

    public get hasStarted():boolean{
        return this.startTime !== Animation.NOT_STARTED;
    }

    public get timeElapsedSinceLastFrame() :number {
        return Date.now() - this.lastFrameTimeStamp;
    }
}