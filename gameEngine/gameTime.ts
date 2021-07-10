import {FPS} from "../config/config.js";

export class GameTime{


    private static readonly FPS : number = FPS;

    //Set the frame duration in milliseconds
    public static readonly FRAME_DURATION : number = GameTime.FPS/ 1000;

    private static _start : number;

    private static _lag: number = 0;

    public static startTimer() : number{
        if(GameTime._start){
            throw new Error("GameTime has already been started");
        }
        GameTime._start = Date.now();
        return GameTime._start;
    }
    public static get start():number{
        return GameTime._start;
    }
    public static get elapsed () : number {
        return GameTime.current - GameTime.start;
    }
    public static get current() : number{
        return Date.now();
    }
    public static get lag() : number{
        GameTime._lag += GameTime.elapsed;
        return GameTime._lag;
    }
}