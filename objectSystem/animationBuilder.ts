import {Sprite} from "./sprite.js";
import {Animation} from "./animation.js";
import {AnimationFrame} from "./animationFrame.js";

export class AnimationBuilder{

    private static instance:AnimationBuilder;

    private constructor(){}

    public static getInstance() : AnimationBuilder{
        if(!this.instance){
            this.instance = new AnimationBuilder;
        }
        return this.instance;
    }

    public build(sprite:Sprite,spriteRow:number):Animation{

        // Every row of image sprite correspond to an animation : The index is base 1
        let y = (spriteRow - 1 ) * Sprite.FRAME.CHARACTER.HEIGHT;

        let animationFrames : AnimationFrame[] = [];

        for(let x = 0; x <= sprite.image.width; x+= Sprite.FRAME.CHARACTER.WIDTH){
            animationFrames.push(new AnimationFrame({
                sprite :  sprite,
                x      :  x,
                y      :  y,
                height :  Sprite.FRAME.CHARACTER.HEIGHT,
                width  :  Sprite.FRAME.CHARACTER.WIDTH
                })
            );
        }

        return new Animation(sprite,animationFrames);
    }

}