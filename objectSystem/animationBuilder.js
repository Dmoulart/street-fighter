import { Animation } from "./animation.js";
import { AnimationFrame } from "./animationFrame.js";
export class AnimationBuilder {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new AnimationBuilder;
        }
        return this.instance;
    }
    build(sprite, spriteRow) {
        // Every row of image sprite correspond to an animation : The index is base 1
        let y = (spriteRow - 1) * AnimationFrame.DIMENSIONS.CHARACTER.HEIGHT;
        let animationFrames = [];
        for (let x = 0; x < sprite.image.width; x += AnimationFrame.DIMENSIONS.CHARACTER.WIDTH) {
            animationFrames.push(new AnimationFrame({
                sprite: sprite,
                x: x,
                y: y,
                height: AnimationFrame.DIMENSIONS.CHARACTER.HEIGHT,
                width: AnimationFrame.DIMENSIONS.CHARACTER.WIDTH
            }));
        }
        return new Animation(sprite, animationFrames);
    }
}
