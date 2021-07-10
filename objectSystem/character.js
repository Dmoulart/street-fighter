import { Entity } from "./entity.js";
import { Sprite } from "./sprite.js";
export class Character extends Entity {
    constructor(sprite) {
        super();
        this.sprite = sprite;
        //this.animation = AnimationBuilder.getInstance().build(sprite,1);
        console.log(this.animation);
    }
}
export const ken = new Character(new Sprite(Sprite.URL.KEN));
