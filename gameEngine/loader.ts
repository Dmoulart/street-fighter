import {AnimationBuilder} from "../objectSystem/animationBuilder.js";
import {Character, CharacterNames} from "../objectSystem/character.js";
import {Sprite} from "../objectSystem/sprite.js";
import {$, CharacterAnimations, CharacterSet, SpriteSet, StageSet} from "../assets/assets.js";
import {Stage, StageNames} from "../objectSystem/stage.js";

export class Loader {

    public static loadedSprites   : SpriteSet;
    public static loadedAnimations: CharacterAnimations;
    public static loadedCharacters: CharacterSet;
    public static loadedStages    : StageSet;

    public static async load():Promise<unknown>{
        return Loader
            .loadSprites()
            .then(Loader.loadAnimations)
            .then(Loader.loadCharacters)
            .then(Loader.loadStages)
            .then(Loader.bindResourcesToCharacters);
    }

    private static async loadSprites(): Promise<HTMLImageElement>{
       Loader.loadedSprites = {
            KEN         : new Sprite(Sprite.URI.KEN),
            BLANKA_STAGE: new Sprite(Sprite.URI.BLANKA_STAGE)
        }
        return Loader.loadedSprites.KEN.loadImage()
            .then(_=>Loader.loadedSprites.BLANKA_STAGE.loadImage());
    }

    private static loadAnimations():void{
        const animationBuilder :AnimationBuilder = AnimationBuilder.getInstance();
        Loader.loadedAnimations = {
            KEN: {
                STILL:      animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.STILL),
                MOVE_RIGHT: animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.MOVE_RIGHT),
                MOVE_LEFT:  animationBuilder.build($.SPRITES.KEN, Sprite.ANIMATION_ROW.MOVE_LEFT),
            }
        };
    }

    private static loadCharacters():void{
        Loader.loadedCharacters = {
            KEN: new Character($.SPRITES.KEN,CharacterNames.Ken)
        }
    }
    private static loadStages():void{
        Loader.loadedStages = {
            BLANKA: new Stage($.SPRITES.BLANKA_STAGE,StageNames.Blanka)
        }
    }

    private static bindResourcesToCharacters() {
        $.CHARACTERS.KEN.animation = $.ANIMATIONS.KEN.STILL;
    }
}