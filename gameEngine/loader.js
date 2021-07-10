import { ken } from "../objectSystem/character.js";
import { AnimationBuilder } from "../objectSystem/animationBuilder.js";
export class Loader {
    static async load() {
        return this.loadSprites().then(this.loadAnimations);
    }
    static async loadSprites() {
        return ken.sprite.loadImage();
    }
    static loadAnimations() {
        const animationBuilder = AnimationBuilder.getInstance();
        ken.animation = animationBuilder.build(ken.sprite, 1);
    }
}
