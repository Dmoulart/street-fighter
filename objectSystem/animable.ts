import {Animation} from "./animation.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";

export interface Animable extends Drawable {
    animation:Animation;
    sprite:Sprite;
}

export function isAnimable(object:any):object is Animable{
    return 'animation' in object;
}