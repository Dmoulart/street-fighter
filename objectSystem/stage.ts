import {Entity, UNKNOWN_NAME} from "./entity.js";
import {Sprite} from "./sprite.js";
import {Drawable} from "./drawable.js";
import {GAME_RESOLUTION} from "../config/config.js";
import {Vector} from "../simulation/vector.js";
import {AnimationFrame} from "./animationFrame.js";

export enum StageNames {
    Blanka= "BLANKA_STAGE"
}

export class Stage extends Entity implements Drawable{

    static readonly HEIGHT:number = GAME_RESOLUTION.height;
    static readonly WIDTH :number = GAME_RESOLUTION.width;

    static readonly GROUND_HEIGHT :number =  120;

    public readonly height: number = Stage.HEIGHT;
    public readonly width : number = Stage.WIDTH;

    public readonly groundHeight:number = Stage.GROUND_HEIGHT;


    public constructor(sprite:Sprite, name:string = UNKNOWN_NAME) {
        super(sprite,name);
    }

    public static isOutOfBounds(position: Vector):boolean {

        return position.x < 0
            || position.y < 0
            || position.x > Stage.WIDTH  - AnimationFrame.CHARACTER.WIDTH
            || position.y > Stage.HEIGHT - AnimationFrame.CHARACTER.HEIGHT;
    }
}