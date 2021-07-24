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

    static readonly height:number = GAME_RESOLUTION.height;
    static readonly width :number = GAME_RESOLUTION.width;

    static readonly groundHeight :number =  80;

    public readonly height: number = Stage.height;
    public readonly width : number = Stage.width;



    public constructor(sprite:Sprite, name:string = UNKNOWN_NAME) {
        super(sprite,name);
    }

    public static isOutOfBounds(position: Vector):boolean {

        return Stage.isTooFarLeft          (position)
            || Stage.isAboveTheHighestPoint(position)
            || Stage.isBelowTheLowestPoint (position)
            || Stage.isTooFarRight         (position)
    }


    private static isAboveTheHighestPoint(position:Vector) : boolean{
        // Y:0 represents the highest point since canvas begin to draw in the top left corner
       return position.y < 0
    }
    private static isTooFarLeft(position:Vector) : boolean{
        return position.x < 0
    }
    private static isTooFarRight(position:Vector) : boolean{
       return position.x > Stage.width  - AnimationFrame.CHARACTER.WIDTH
    }
    private static isBelowTheLowestPoint(position:Vector) : boolean{
        //Stage.height represents the lowestPoint so > Stage.groundHeight mean below groundHeight
        return position.y > Stage.groundHeight
    }

}