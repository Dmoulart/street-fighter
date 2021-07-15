import {Sprite} from "./sprite.js";
import {Animation} from "./animation.js";
import {AnimationFrame} from "./animationFrame.js";
import {Vector} from "../simulation/vector.js";

export class AnimationBuilder{

    private static instance:AnimationBuilder;

    private constructor(){}

    public static getInstance() : AnimationBuilder{
        if(!this.instance){
            this.instance = new AnimationBuilder;
        }
        return this.instance;
    }

    // public build(sprite:Sprite,spriteRow:number):Animation{
    //
    //     // Every row of image sprite correspond to an animation : The index is base 1
    //     let y = (spriteRow - 1 ) * AnimationFrame.CHARACTER.HEIGHT;
    //
    //     let animationFrames : AnimationFrame[] = [];
    //
    //     for(let x = 0; x < sprite.image.width; x+= AnimationFrame.CHARACTER.WIDTH){
    //         animationFrames.push(new AnimationFrame({
    //             sprite :  sprite,
    //             sourcePosition: new Vector(x,y),
    //             height :  AnimationFrame.CHARACTER.HEIGHT,
    //             width  :  AnimationFrame.CHARACTER.WIDTH
    //             })
    //         );
    //     }
    //
    //     return new Animation(sprite,animationFrames);
    // }
    public build(sprite:Sprite,spriteRow:number):Animation{

        // Every row of image sprite correspond to an animation : The index is base 1
        let y = (spriteRow - 1 ) * AnimationFrame.CHARACTER.HEIGHT;

        let animationFrames : AnimationFrame[] = [];

        for(let x = 0; x < sprite.image.width; x+= AnimationFrame.CHARACTER.WIDTH){
            animationFrames.push(new AnimationFrame({
                    sprite :  sprite,
                    sourcePosition: new Vector(x,y),
                    height :  AnimationFrame.CHARACTER.HEIGHT,
                    width  :  AnimationFrame.CHARACTER.WIDTH
                })
            );
        }

        return new Animation(sprite,animationFrames);
    }
}