import {Sprite} from "./sprite.js";

export interface Drawable{
    sprite:Sprite;
}
export function isDrawable(object:any):object is Drawable{
    return 'sprite' in object;
}