import {Entity, UNKNOWN_NAME} from "./entity.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";
import {Animable} from "./animable.js";

export class Character extends Entity implements Drawable, Animable{

    public constructor(sprite:Sprite, name:string = UNKNOWN_NAME) {
        super(sprite,name);
    }
}

