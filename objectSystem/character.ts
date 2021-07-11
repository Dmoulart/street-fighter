import {Entity} from "./entity.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";
import {Animable} from "./animable.js";
import {Animation} from "./animation.js";

export class Character extends Entity implements Drawable, Animable{

    public sprite!: Sprite;
    public animation!: Animation;

    public constructor(sprite:Sprite) {
        super();
        this.sprite = sprite;
    }


}
export type CharacterSet = {
    KEN:Character
}
export const CHARACTERS = {
    KEN : new Character(new Sprite(Sprite.URI.Ken))
}
