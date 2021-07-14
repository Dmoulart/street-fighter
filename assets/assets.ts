import {Sprite} from "../objectSystem/sprite.js";
import {Loader} from "../gameEngine/loader.js";
import {Character} from "../objectSystem/character.js";
import {Animation} from "../objectSystem/animation.js";

export type SpriteSet = {
    KEN: Sprite
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

export class Assets{

    private static _SPRITES    : SpriteSet;
    private static _ANIMATIONS : CharacterAnimations;
    private static _CHARACTERS : CharacterSet;

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
}
/**
 * This constant is an Assets class alias
 */
export const $ = Assets;