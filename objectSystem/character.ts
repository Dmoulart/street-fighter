import {Entity} from "./entity.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";
import {Animable} from "./Animable.js";
import {Animation} from "./animation.js";

export class Character extends Entity implements Drawable, Animable{

    public sprite!: Sprite;
    public animation!: Animation;

    public constructor(sprite:Sprite) {
        super();
        this.sprite = sprite;
    }


}

export const characters = {
    ken : new Character(new Sprite(Sprite.URL.KEN))
}
