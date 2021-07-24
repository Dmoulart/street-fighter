import { Animation } from "./animation.js";
import { AnimationFrame } from "./animationFrame.js";
import { Vector } from "../simulation/vector.js";
import { GhostCanvas } from "../gameEngine/ghostCanvas.js";
import { ANIMATION_FRAME_DURATION } from "../config/config.js";
export class AnimationBuilder {
    constructor() {
        this.analyticCanvas = new GhostCanvas;
    }
    static getInstance() {
        return this.instance ?? (this.instance = new AnimationBuilder);
    }
    /**
     * Build an animation from sprite
     * @param sprite
     * @param spriteRow
     */
    build(sprite, spriteRow) {
        this.analyticCanvas.canvas.height = AnimationFrame.CHARACTER.HEIGHT;
        this.analyticCanvas.canvas.width = AnimationFrame.CHARACTER.WIDTH;
        // Every row of image sprite correspond to an animation : The index is base 1
        let y = (spriteRow - 1) * AnimationFrame.CHARACTER.HEIGHT;
        let animationFrames = [];
        for (let x = 0; x < sprite.image.width; x += AnimationFrame.CHARACTER.WIDTH) {
            const position = new Vector(x, y);
            if (this.isEndOfAnimationRow(sprite, position))
                break;
            animationFrames.push(new AnimationFrame({
                sprite: sprite,
                sourcePosition: position,
                height: AnimationFrame.CHARACTER.HEIGHT,
                width: AnimationFrame.CHARACTER.WIDTH
            }));
        }
        return new Animation(sprite, animationFrames, animationFrames.length * ANIMATION_FRAME_DURATION);
    }
    /**
     * Use a ghost canvas to analyze frame by frame if a frame is empty.
     * TODO: Find a more effective method to determine is a frame is empty (currently we are checking every pixel)
     * @param sprite
     * @param position
     * @private
     */
    isEndOfAnimationRow(sprite, position) {
        let isEndOfAnimationRow = true;
        this.analyticCanvas.context.drawImage(sprite.image, position.x, position.y, AnimationFrame.CHARACTER.WIDTH, AnimationFrame.CHARACTER.HEIGHT, 0, 0, AnimationFrame.CHARACTER.WIDTH, AnimationFrame.CHARACTER.HEIGHT);
        const imageData = this.analyticCanvas.context.getImageData(0, 0, AnimationFrame.CHARACTER.WIDTH, AnimationFrame.CHARACTER.HEIGHT).data;
        for (let i = 0; i < imageData.length; i += 4) {
            const pixel = {
                red: imageData[i],
                green: imageData[i + 1],
                blue: imageData[i + 2],
                alpha: imageData[i + 3]
            };
            if (pixel.red !== 0
                && pixel.green !== 0
                && pixel.blue !== 0
                && pixel.alpha !== 0) {
                isEndOfAnimationRow = false;
                break;
            }
        }
        this.analyticCanvas.clear();
        return isEndOfAnimationRow;
    }
}
