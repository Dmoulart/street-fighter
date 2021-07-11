import {Sprite} from "./sprite.js";
import {Animation} from "./animation.js";
import {Action} from "../simulation/actions/action.js";
export const UNKNOWN_NAME = "unknown"
export abstract class Entity{

    public sprite   !: Sprite;
    public animation!: Animation;
    private _action !: Action;
    public name     !: string;
    protected constructor(sprite:Sprite,name:string = UNKNOWN_NAME) {
        this.sprite = sprite;
        this.name = name;
    }
    public get action(){
        return this._action;
    }
    public set action(action:Action){
        this._action = action;
    }
}