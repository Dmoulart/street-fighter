import {Entity} from "../../objectSystem/entity.js";
import {ACTION_DURATION} from "../../config/config.js";
import {Timable} from "../timable";

export abstract class Action implements Timable{

    public isDone   :boolean   = false;

    public duration :number    = ACTION_DURATION;

    public startTime:number    = Date.now();

    public animationKey!:string|null;

    protected readonly source!:Entity;

    protected constructor(source:Entity) {
        this.source = source;
    }


}