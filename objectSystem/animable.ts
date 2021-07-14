import {Animation} from "./animation.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";

export interface Animable extends Drawable {
    animation:Animation;
    sprite:Sprite;
}

export function isAnimable(object:any):object is Animable{
    //We check not only if object has an animation field but if object has an animation setted
    return 'animation' in object && object['animation'] !== undefined;
}