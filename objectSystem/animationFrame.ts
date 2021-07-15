import {Sprite} from "./sprite.js";
import {Vector} from "../simulation/vector.js";

enum CharacterDimensions{
    WIDTH=65,
    HEIGHT=100
}

export class AnimationFrame{

    private sprite!:Sprite;

    public sourcePosition!:Vector;
    // public x!:number;
    // public y!:number;

    public width!:number;
    public height!:number;

    //Animation Frame Character Data
    public static readonly CHARACTER = CharacterDimensions;

    constructor(params: {
        sprite:Sprite,
        sourcePosition:Vector,
        width:number,
        height:number
    }) {
        this.sprite = params.sprite;
        // this.x      = params.x;
        // this.y      = params.y;
        this.sourcePosition = params.sourcePosition;
        this.width  = params.width;
        this.height = params.height;
    }
}
