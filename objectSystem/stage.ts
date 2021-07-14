import {Entity, UNKNOWN_NAME} from "./entity.js";
import {Sprite} from "./sprite.js";
import {Drawable} from "./drawable.js";
import {STAGE_DIMENSIONS} from "../config/config.js";

export enum StageNames {
    Blanka= "BLANKA_STAGE"
}

export class Stage extends Entity implements Drawable{

    height: number = STAGE_DIMENSIONS.HEIGHT;
    width : number = STAGE_DIMENSIONS.WIDTH;

    public constructor(sprite:Sprite,
                       name:string = UNKNOWN_NAME) {
        super(sprite,name);
    }


}