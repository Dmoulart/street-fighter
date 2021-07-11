import {AnimationBuilder} from "../objectSystem/animationBuilder.js";
import {Character, CHARACTERS, CharacterSet} from "../objectSystem/character.js";
import {Sprite, SPRITES} from "../objectSystem/sprite.js";
import {CharacterAnimations} from "../objectSystem/animations";

export class Loader {

    public static loadedAnimations: CharacterAnimations;
    public static loadedCharacters: CharacterSet;
    public static async load():Promise<unknown>{
        return this
            .loadSprites()
            .then(this.loadAnimations)
            .then(this.loadCharacters);
    }

    private static async loadSprites(): Promise<HTMLImageElement>{
        return SPRITES.KEN.loadImage();

    }

    private static async loadAnimations() : Promise<void>{
        const animationBuilder :AnimationBuilder = AnimationBuilder.getInstance();
        this.loadedAnimations = {
            KEN: {
                STILL: animationBuilder.build(CHARACTERS.KEN.sprite, Sprite.ANIMATION_ROW.Still)
            }
        };
    }

    private static async loadCharacters(): Promise<void>{
        this.loadedCharacters = {
            KEN: new Character(SPRITES.KEN)
        }
    }
}