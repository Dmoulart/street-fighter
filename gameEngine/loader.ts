import {AnimationBuilder} from "../objectSystem/animationBuilder.js";
import {characters} from "../objectSystem/character.js";
import {Sprite} from "../objectSystem/sprite.js";

export class Loader {

    public static async load():Promise<unknown>{
        return this.loadSprites().then(this.loadAnimations);
    }

    private static async loadSprites(): Promise<HTMLImageElement>{
        return characters.ken.sprite.loadImage()
    }

    private static loadAnimations() : void{
        const animationBuilder :AnimationBuilder = AnimationBuilder.getInstance();

        characters.ken.animation = animationBuilder.build(characters.ken.sprite, Sprite.ANIMATION_ROW.Still);
    }
}