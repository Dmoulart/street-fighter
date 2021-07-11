import {Sprite} from "./sprite.js";
enum Character{
    Width=65,
    Height=100
}
export class AnimationFrame{

    private sprite!:Sprite;

    public x!:number;
    public y!:number;

    public width!:number;
    public height!:number;

    //Animation Frame Character Data
    public static readonly Character = Character;

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
