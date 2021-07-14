import {Entity} from "../../objectSystem/entity.js";
import {ACTION_DURATION} from "../../config/config.js";
import {NOT_STARTED, Timable} from "../timable.js";

export abstract class Action implements Timable{

    public key     !:string;

    public isRunning:boolean   = false;
    public duration :number    = ACTION_DURATION;
    public startTime:number    = NOT_STARTED;

    protected readonly source!:Entity;

    protected constructor(source:Entity) {
        this.source = source;
    }


    public start(): void {
        this.startTime = Date.now();
        this.isRunning = true;
    }
    public stop(): void {
        this.isRunning = false;
    }
    public isOfSameActionTypeAs(action:Action){
        return this.key === action.key
    }
    public isNotOfSameActionTypeAs(action:Action){
        return !this.isOfSameActionTypeAs(action);
    }
    public get isPossible():boolean{
        return this.isNotOfSameActionTypeAs(this.source.action);
    }
    public get elapsedTime(): number {
        if(this.startTime === NOT_STARTED) return 0;
        return Date.now() - this.startTime;
    }
    public get isDone(): boolean{
        return this.elapsedTime >= this.duration;
    }
    public get hasNotStartedYet(): boolean{
        return this.startTime === NOT_STARTED;
    }

}