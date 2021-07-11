import { Entity } from "./entity.js";
export class Character extends Entity {
    constructor(sprite) {
        super();
        this.sprite = sprite;
    }
}
