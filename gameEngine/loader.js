import { AnimationBuilder } from "../objectSystem/animationBuilder.js";
import { Character } from "../objectSystem/character.js";
import { Sprite } from "../objectSystem/sprite.js";
import { $ } from "../assets/assets.js";
export class Loader {
    static async load() {
        return Loader
            .loadSprites()
            .then(Loader.loadAnimations)
            .then(Loader.loadCharacters)
            .then(Loader.bindResourcesToCharacters);
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
                STILL: animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.STILL),
                MOVE_RIGHT: animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.MOVE_RIGHT),
                MOVE_LEFT: animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.MOVE_LEFT),
            }
        };
    }
    static loadCharacters() {
        Loader.loadedCharacters = {
            KEN: new Character($.SPRITES.KEN, "KEN")
        };
    }
    static bindResourcesToCharacters() {
        $.CHARACTERS.KEN.animation = $.ANIMATIONS.KEN.STILL;
    }
}
