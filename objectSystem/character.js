import { Entity } from "./entity.js";
import { Sprite } from "./sprite.js";
export class Character extends Entity {
    constructor(sprite) {
        super();
        this.sprite = sprite;
    }
}
export const characters = {
    ken: new Character(new Sprite(Sprite.URL.KEN))
};
