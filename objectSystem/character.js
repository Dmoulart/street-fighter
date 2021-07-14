import { DEFAULT_STATS, Entity, UNKNOWN_NAME } from "./entity.js";
import { DefaultAction } from "../simulation/actions/stillAction.js";
import { AnimationFrame } from "./animationFrame.js";
export var CharacterNames;
(function (CharacterNames) {
    CharacterNames["Ken"] = "KEN";
})(CharacterNames || (CharacterNames = {}));
export class Character extends Entity {
    constructor(sprite, name = UNKNOWN_NAME, stats = DEFAULT_STATS) {
        super(sprite, name);
        this.height = AnimationFrame.CHARACTER.HEIGHT;
        this.width = AnimationFrame.CHARACTER.WIDTH;
        this.action = new DefaultAction(this);
        this.stats = stats;
    }
}
