import {Entity} from "../../objectSystem/entity.js";
import {ACTION_DURATION} from "../../config/config.js";
import {NOT_STARTED, Timable} from "../timable.js";

export abstract class Action implements Timable{

    public isDone   :boolean   = false;

    public duration :number    = ACTION_DURATION;

    public startTime:number    = Date.now();

    public animationKey!:string|null;

    protected readonly source!:Entity;

    protected constructor(source:Entity) {
        this.source = source;
    }

    public start(): void {
        this.startTime = Date.now();
    }

    public stop(): void {
        this.startTime = NOT_STARTED;
        this.isDone    = true;
    }
    public get elapsedTime() :number {
        if(this.startTime === NOT_STARTED) return 0;
        return Date.now() - this.startTime;
    }

}