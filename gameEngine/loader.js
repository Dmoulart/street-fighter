import { AnimationBuilder } from "../objectSystem/animationBuilder.js";
import { Character, CHARACTERS } from "../objectSystem/character.js";
import { Sprite, SPRITES } from "../objectSystem/sprite.js";
export class Loader {
    static async load() {
        return this
            .loadSprites()
            .then(this.loadAnimations)
            .then(this.loadCharacters);
    }
    static async loadSprites() {
        return SPRITES.KEN.loadImage();
    }
    static async loadAnimations() {
        const animationBuilder = AnimationBuilder.getInstance();
        this.loadedAnimations = {
            KEN: {
                STILL: animationBuilder.build(CHARACTERS.KEN.sprite, Sprite.ANIMATION_ROW.Still)
            }
        };
    }
    static async loadCharacters() {
        this.loadedCharacters = {
            KEN: new Character(SPRITES.KEN)
        };
    }
}
