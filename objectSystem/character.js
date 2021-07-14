import { Entity, UNKNOWN_NAME } from "./entity.js";
export var CharacterNames;
(function (CharacterNames) {
    CharacterNames["Ken"] = "Ken";
})(CharacterNames || (CharacterNames = {}));
export class Character extends Entity {
    constructor(sprite, name = UNKNOWN_NAME) {
        super(sprite, name);
    }
}
