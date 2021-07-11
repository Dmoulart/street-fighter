import { AnimationBuilder } from "../objectSystem/animationBuilder.js";
import { characters } from "../objectSystem/character.js";
import { Sprite } from "../objectSystem/sprite.js";
export class Loader {
    static async load() {
        return this.loadSprites().then(this.loadAnimations);
    }
    static async loadSprites() {
        return characters.ken.sprite.loadImage();
    }
    static loadAnimations() {
        const animationBuilder = AnimationBuilder.getInstance();
        characters.ken.animation = animationBuilder.build(characters.ken.sprite, Sprite.ANIMATION_ROW.Still);
    }
}
