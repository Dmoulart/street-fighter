import {ken} from "../objectSystem/character.js";
import {AnimationBuilder} from "../objectSystem/animationBuilder.js";

export class Loader {

    public static async load():Promise<unknown>{
        return this.loadSprites().then(this.loadAnimations);
    }

    private static async loadSprites(): Promise<HTMLImageElement>{
        return ken.sprite.loadImage()
    }

    private static loadAnimations() : void{
        const animationBuilder :AnimationBuilder = AnimationBuilder.getInstance();
        ken.animation = animationBuilder.build(ken.sprite,1);
    }
}