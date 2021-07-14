import {Sprite} from "./sprite.js";

export interface Drawable{
    sprite:Sprite;
    width :number;
    height:number;
}
export function isDrawable(object:any):object is Drawable{
    return 'sprite' in object
        && 'width'  in object
        && 'height' in object;
}