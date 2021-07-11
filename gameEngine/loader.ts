import {AnimationBuilder} from "../objectSystem/animationBuilder.js";
import {SpriteRow} from "../objectSystem/sprite.js";
import {characters} from "../objectSystem/character.js";

export class Loader {

    public static async load():Promise<unknown>{
        return this.loadSprites().then(this.loadAnimations);
    }

    private static async loadSprites(): Promise<HTMLImageElement>{
        return characters.ken.sprite.loadImage()
    }

    private static loadAnimations() : void{
        const animationBuilder :AnimationBuilder = AnimationBuilder.getInstance();

        characters.ken.animation = animationBuilder.build(characters.ken.sprite, SpriteRow.STILL);
    }
}