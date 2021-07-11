import {AnimationBuilder} from "../objectSystem/animationBuilder.js";
import {Character} from "../objectSystem/character.js";
import {Sprite} from "../objectSystem/sprite.js";
import {$, CharacterAnimations, CharacterSet, SpriteSet} from "../assets/assets.js";

export class Loader {

    public static loadedSprites   : SpriteSet;
    public static loadedAnimations: CharacterAnimations;
    public static loadedCharacters: CharacterSet;

    public static async load():Promise<unknown>{
        return Loader
            .loadSprites()
            .then(Loader.loadAnimations)
            .then(Loader.loadCharacters);
    }

    private static async loadSprites(): Promise<HTMLImageElement>{
       Loader.loadedSprites = {
            KEN: new Sprite(Sprite.URI.KEN)
        }
        return Loader.loadedSprites.KEN.loadImage();
    }

    private static loadAnimations():void{
        const animationBuilder :AnimationBuilder = AnimationBuilder.getInstance();
        Loader.loadedAnimations = {
            KEN: {
                STILL:      animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.STILL),
                MOVE_RIGHT: animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.MOVE_RIGHT),
            }
        };
    }

    private static loadCharacters():void{
        Loader.loadedCharacters = {
            KEN: new Character($.SPRITES.KEN)
        }
    }

}