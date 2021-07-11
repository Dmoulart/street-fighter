import { Action } from "./action.js";
import { $ } from "../../assets/assets.js";
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
        this.source.action = this;
        this.source.animation = $.ANIMATIONS[source.name][this.animationKey];
    }
}
