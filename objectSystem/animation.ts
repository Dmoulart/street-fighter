import {Sprite} from "./sprite.js";
import {AnimationFrame} from "./animationFrame.js";
import {ACTION_MINIMUM_DURATION, ANIMATION_FRAME_DURATION} from "../config/config.js";
import {NOT_STARTED, Timable} from "../simulation/timable.js";

export class Animation implements Timable{

    public  readonly frames !:Array<AnimationFrame>;

    public duration  :number  = ACTION_MINIMUM_DURATION;
    public isRunning :boolean = false;
    public startTime :number  = NOT_STARTED;

    private lastFrameTimeStamp  :number        = NOT_STARTED;
    private currentFrameIndex   :number        = 0;

    private readonly sprite !:Sprite;

    public constructor(sprite:Sprite ,frames: Array<AnimationFrame>) {
        this.sprite = sprite;
        this.frames = frames;
    }


    public start():void{
        this.startTime          = Date.now();
        this.lastFrameTimeStamp = Date.now();
    }
    public stop():void{
        this.isRunning = true;
    }
    public reset():Animation{
        this.startTime          = NOT_STARTED;
        this.lastFrameTimeStamp = NOT_STARTED;
        return this;
    }

    private isTooSoonToChangeFrame(): boolean  {
        return this.timeElapsedSinceLastFrame < ANIMATION_FRAME_DURATION;
    }
    private nextFrameIsOutOfBound() : boolean {
        return this.currentFrameIndex + 1 >= this.frames.length;
    }


    public get currentFrame() : AnimationFrame {

        if(this.isTooSoonToChangeFrame()
        || !this.hasStarted) return this.frames[this.currentFrameIndex];

        if(this.nextFrameIsOutOfBound()) this.currentFrameIndex = -1;

        this.currentFrameIndex ++;

        this.lastFrameTimeStamp = Date.now();

        return this.frames[this.currentFrameIndex];
    }
    public get hasStarted():boolean{
        return this.startTime !== NOT_STARTED;
    }
    public get timeElapsedSinceLastFrame(): number {
        return Date.now() - this.lastFrameTimeStamp;
    }
    public get elapsedTime(): number {
        return Date.now() - this.startTime;
    }
    public get isDone(): boolean{
        return this.elapsedTime >= this.duration;
    }
    public get hasNotStartedYet(): boolean{
        return this.startTime === NOT_STARTED;
    }



}