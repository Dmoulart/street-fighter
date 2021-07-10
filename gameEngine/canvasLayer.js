import { GAME_RESOLUTION } from "../config/config.js";
export class CanvasLayer {
    constructor(id) {
        const canvasElement = document.createElement('canvas');
        canvasElement.id = id;
        canvasElement.width = GAME_RESOLUTION.width;
        canvasElement.height = GAME_RESOLUTION.height;
        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        document.body.append(this.canvas);
    }
}
