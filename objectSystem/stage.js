import { Entity, UNKNOWN_NAME } from "./entity.js";
import { GAME_RESOLUTION } from "../config/config.js";
import { AnimationFrame } from "./animationFrame.js";
export var StageNames;
(function (StageNames) {
    StageNames["Blanka"] = "BLANKA_STAGE";
})(StageNames || (StageNames = {}));
export class Stage extends Entity {
    constructor(sprite, name = UNKNOWN_NAME) {
        super(sprite, name);
        this.height = Stage.height;
        this.width = Stage.width;
    }
    static isOutOfBounds(position) {
        return Stage.isTooFarLeft(position)
            || Stage.isAboveTheHighestPoint(position)
            || Stage.isBelowTheLowestPoint(position)
            || Stage.isTooFarRight(position);
    }
    static isAboveTheHighestPoint(position) {
        // Y:0 represents the highest point since canvas begin to draw in the top left corner
        return position.y < 0;
    }
    static isTooFarLeft(position) {
        return position.x < 0;
    }
    static isTooFarRight(position) {
        return position.x > Stage.width - AnimationFrame.CHARACTER.WIDTH;
    }
    static isBelowTheLowestPoint(position) {
        //Stage.height represents the lowestPoint so > Stage.groundHeight mean below groundHeight
        return position.y > Stage.groundHeight;
    }
}
Stage.height = GAME_RESOLUTION.height;
Stage.width = GAME_RESOLUTION.width;
Stage.groundHeight = 80;
