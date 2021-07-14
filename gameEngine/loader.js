import { AnimationBuilder } from "../objectSystem/animationBuilder.js";
import { Character, CharacterNames } from "../objectSystem/character.js";
import { Sprite } from "../objectSystem/sprite.js";
import { $ } from "../assets/assets.js";
import { Stage, StageNames } from "../objectSystem/stage.js";
export class Loader {
    static async load() {
        return Loader
            .loadSprites()
            .then(Loader.loadAnimations)
            .then(Loader.loadCharacters)
            .then(Loader.loadStages)
            .then(Loader.bindResourcesToCharacters);
    }
    static async loadSprites() {
        Loader.loadedSprites = {
            KEN: new Sprite(Sprite.URI.KEN),
            BLANKA_STAGE: new Sprite(Sprite.URI.BLANKA_STAGE)
        };
        return Loader.loadedSprites.KEN.loadImage()
            .then(_ => Loader.loadedSprites.BLANKA_STAGE.loadImage());
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
            KEN: new Character($.SPRITES.KEN, CharacterNames.Ken)
        };
    }
    static loadStages() {
        Loader.loadedStages = {
            BLANKA: new Stage($.SPRITES.BLANKA_STAGE, StageNames.Blanka)
        };
    }
    static bindResourcesToCharacters() {
        $.CHARACTERS.KEN.animation = $.ANIMATIONS.KEN.STILL;
    }
}
