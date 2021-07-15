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
        this.height = Stage.HEIGHT;
        this.width = Stage.WIDTH;
        this.groundHeight = Stage.GROUND_HEIGHT;
    }
    static isOutOfBounds(position) {
        return position.x < 0
            || position.y < 0
            || position.x > Stage.WIDTH - AnimationFrame.CHARACTER.WIDTH
            || position.y > Stage.HEIGHT - AnimationFrame.CHARACTER.HEIGHT;
    }
}
Stage.HEIGHT = GAME_RESOLUTION.height;
Stage.WIDTH = GAME_RESOLUTION.width;
Stage.GROUND_HEIGHT = 80;
