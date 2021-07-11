import { Entity } from "./entity.js";
import { Sprite } from "./sprite.js";
export class Character extends Entity {
    constructor(sprite) {
        super();
        this.sprite = sprite;
    }
}
export const CHARACTERS = {
    KEN: new Character(new Sprite(Sprite.URI.Ken))
};
