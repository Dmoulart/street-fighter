import {Sprite} from "./sprite.js";
import {Animation} from "./animation.js";
import {Action} from "../simulation/actions/action.js";
import {Vector} from "../simulation/vector.js";
import {Drawable} from "./drawable";

export const UNKNOWN_NAME = "unknown"

export type Stats = {
    speed:number;
}

export const DEFAULT_STATS :Stats = {
    speed:5
}

export abstract class Entity implements Drawable{

    public   name       !: string;
    public   sprite     !: Sprite;
    public   position   !: Vector;
    public   stats      !: Stats;
    private _animation  !: Animation;
    private _action     !: Action;

    protected constructor(sprite:Sprite,
                          name:string     = UNKNOWN_NAME,
                          position:Vector = Vector.origin,
                          stats:Stats     = DEFAULT_STATS) {
        this.sprite   = sprite;
        this.name     = name;
        this.position = position;
        this.stats    = stats;
    }

    public get action(){
        return this._action;
    }
    public set action(action:Action){
        this._action = action;
    }
    public get animation(){
        return this._animation;
    }
    public set animation(animation:Animation){
        this._animation = animation;
    }

    abstract height: number;
    abstract width: number;
}