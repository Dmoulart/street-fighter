import { Entity, UNKNOWN_NAME } from "./entity.js";
export class Character extends Entity {
    constructor(sprite, name = UNKNOWN_NAME) {
        super(sprite, name);
    }
}
