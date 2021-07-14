import { Loader } from "../gameEngine/loader.js";
export class Assets {
    static get SPRITES() {
        if (!Loader.loadedSprites) {
            throw new Error("Can't get sprites because they have not been loaded yet");
        }
        return Assets._SPRITES ?? (Assets._SPRITES = Loader.loadedSprites);
    }
    static get ANIMATIONS() {
        if (!Loader.loadedAnimations) {
            throw new Error("Can't get animations because they have not been loaded yet");
        }
        return Assets._ANIMATIONS ?? (Assets._ANIMATIONS = Loader.loadedAnimations);
    }
    static get CHARACTERS() {
        if (!Loader.loadedCharacters) {
            throw new Error("Can't get characters because they have not been loaded yet");
        }
        return Assets._CHARACTERS ?? (Assets._CHARACTERS = Loader.loadedCharacters);
    }
    static get STAGES() {
        if (!Loader.loadedStages) {
            throw new Error("Can't get stages because they have not been loaded yet");
        }
        return Assets._STAGES ?? (Assets._STAGES = Loader.loadedStages);
    }
}
/**
 * This constant is an Assets class alias
 */
export const $ = Assets;
