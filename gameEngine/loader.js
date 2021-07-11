import { AnimationBuilder } from "../objectSystem/animationBuilder.js";
import { Character } from "../objectSystem/character.js";
import { Sprite } from "../objectSystem/sprite.js";
import { $ } from "../assets/assets.js";
export class Loader {
    static async load() {
        return Loader
            .loadSprites()
            .then(Loader.loadAnimations)
            .then(Loader.loadCharacters);
    }
    static async loadSprites() {
        Loader.loadedSprites = {
            KEN: new Sprite(Sprite.URI.KEN)
        };
        return Loader.loadedSprites.KEN.loadImage();
    }
    static loadAnimations() {
        const animationBuilder = AnimationBuilder.getInstance();
        Loader.loadedAnimations = {
            KEN: {
                STILL: animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.STILL)
            }
        };
    }
    static loadCharacters() {
        Loader.loadedCharacters = {
            KEN: new Character($.SPRITES.KEN)
        };
    }
}
