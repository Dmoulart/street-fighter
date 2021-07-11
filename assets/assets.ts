import {Sprite} from "../objectSystem/sprite.js";
import {Loader} from "../gameEngine/loader.js";
import {Character} from "../objectSystem/character";
import {Animation} from "../objectSystem/animation";

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
        if(!Assets._SPRITES){
            if(!Loader.loadedSprites) {
                throw new Error("Can't get sprites because they have not been loaded yet")
            }
            Assets._SPRITES = Loader.loadedSprites;
        }
        return Assets._SPRITES;
    }

    public static get ANIMATIONS() :CharacterAnimations{
        if(!Assets._ANIMATIONS){
            if(!Loader.loadedAnimations) {
                throw new Error("Can't get animations because they have not been loaded yet")
            }
            Assets._ANIMATIONS = Loader.loadedAnimations;
        }
        return Assets._ANIMATIONS;
    }

    public static get CHARACTERS() :CharacterSet{
        if(!Assets._CHARACTERS){
            if(!Loader.loadedCharacters) {
                throw new Error("Can't get characters because they have not been loaded yet")
            }
            Assets._CHARACTERS = Loader.loadedCharacters;
        }
        return Assets._CHARACTERS;
    }
}

/**
 * This constant is an Assets class alias
 */
export const $ = Assets;