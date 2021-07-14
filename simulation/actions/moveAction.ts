import {Action} from "./action.js";
import {Entity} from "../../objectSystem/entity.js";
export enum Directions{
    Up    = "UP",
    Down  = "DOWN",
    Left  = "LEFT",
    Right = "RIGHT"
}
export class MoveAction extends Action{

    public readonly direction!:Directions;

    constructor(source:Entity,direction:Directions) {
        super(source);
        this.direction  =  direction;
        this.key        = `MOVE_${direction}`;
    }

}