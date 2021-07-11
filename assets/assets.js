import { Loader } from "../gameEngine/loader.js";
export class Assets {
    static get SPRITES() {
        if (!Assets._SPRITES) {
            if (!Loader.loadedSprites) {
                throw new Error("Can't get sprites because they have not been loaded yet");
            }
            Assets._SPRITES = Loader.loadedSprites;
        }
        return Assets._SPRITES;
    }
    static get ANIMATIONS() {
        if (!Assets._ANIMATIONS) {
            if (!Loader.loadedAnimations) {
                throw new Error("Can't get animations because they have not been loaded yet");
            }
            Assets._ANIMATIONS = Loader.loadedAnimations;
        }
        return Assets._ANIMATIONS;
    }
    static get CHARACTERS() {
        if (!Assets._CHARACTERS) {
            if (!Loader.loadedCharacters) {
                throw new Error("Can't get characters because they have not been loaded yet");
            }
            Assets._CHARACTERS = Loader.loadedCharacters;
        }
        return Assets._CHARACTERS;
    }
}
//Assets Alias
export const $ = Assets;
