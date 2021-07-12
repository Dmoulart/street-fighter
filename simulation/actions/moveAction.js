import { Action } from "./action.js";
export var Directions;
(function (Directions) {
    Directions["Up"] = "UP";
    Directions["Down"] = "DOWN";
    Directions["Left"] = "LEFT";
    Directions["Right"] = "RIGHT";
})(Directions || (Directions = {}));
export class MoveAction extends Action {
    constructor(source, direction) {
        super(source);
        this.direction = direction;
        this.animationKey = `MOVE_${direction}`;
    }
}
