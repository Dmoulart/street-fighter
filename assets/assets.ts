import {Sprite} from "../objectSystem/sprite.js";
import {Loader} from "../gameEngine/loader.js";
import {Character} from "../objectSystem/character.js";
import {Animation} from "../objectSystem/animation.js";
import {Stage} from "../objectSystem/stage.js";

export type SpriteSet = {
    [spriteName:string]: Sprite
}
export type AnimationSet = {
    [animationName:string]:Animation
}
export type CharacterSet = {
    [characterName:string]:Character
}
export type CharacterAnimations = {
    [characterName:string]: AnimationSet
}
export type StageSet = {
    [stageName:string]: Stage
}

export class Assets{

    private static _SPRITES    : SpriteSet;
    private static _ANIMATIONS : CharacterAnimations;
    private static _CHARACTERS : CharacterSet;
    private static _STAGES     : StageSet;

    public static get SPRITES() :SpriteSet{
        if(!Loader.loadedSprites) {
            throw new Error("Can't get sprites because they have not been loaded yet")
        }
        return Assets._SPRITES ?? (Assets._SPRITES = Loader.loadedSprites);
    }

    public static get ANIMATIONS() :CharacterAnimations{
        if(!Loader.loadedAnimations) {
            throw new Error("Can't get animations because they have not been loaded yet")
        }
        return Assets._ANIMATIONS ?? (Assets._ANIMATIONS = Loader.loadedAnimations);
    }

    public static get CHARACTERS() :CharacterSet{
        if(!Loader.loadedCharacters) {
            throw new Error("Can't get characters because they have not been loaded yet")
        }
        return Assets._CHARACTERS ?? (Assets._CHARACTERS = Loader.loadedCharacters);
    }
    public static get STAGES() :CharacterSet{
        if(!Loader.loadedStages) {
            throw new Error("Can't get stages because they have not been loaded yet")
        }
        return Assets._STAGES ?? (Assets._STAGES = Loader.loadedStages);
    }
}
/**
 * This constant is an Assets class alias
 */
export const $ = Assets;