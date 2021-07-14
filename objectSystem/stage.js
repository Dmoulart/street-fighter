import { Entity, UNKNOWN_NAME } from "./entity.js";
import { STAGE_DIMENSIONS } from "../config/config.js";
export var StageNames;
(function (StageNames) {
    StageNames["Blanka"] = "BLANKA_STAGE";
})(StageNames || (StageNames = {}));
export class Stage extends Entity {
    constructor(sprite, name = UNKNOWN_NAME) {
        super(sprite, name);
        this.height = STAGE_DIMENSIONS.HEIGHT;
        this.width = STAGE_DIMENSIONS.WIDTH;
    }
}
