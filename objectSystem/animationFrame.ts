import {Sprite} from "./sprite.js";

export class AnimationFrame{

    private sprite!:Sprite;

    public x!:number;
    public y!:number;

    public width!:number;
    public height!:number;

    constructor(params: {
        sprite:Sprite,
        x:number,
        y:number,
        width:number,
        height:number
    }) {
        this.sprite = params.sprite;
        this.x      = params.x;
        this.y      = params.y;
        this.width  = params.width;
        this.height = params.height;
    }
}