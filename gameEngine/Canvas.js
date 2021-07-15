import { GAME_RESOLUTION } from "../config/config.js";
export class Canvas {
    constructor(id = "none", width = GAME_RESOLUTION.width, height = GAME_RESOLUTION.height) {
        const canvasElement = document.createElement('canvas');
        canvasElement.id = id;
        canvasElement.width = width;
        canvasElement.height = height;
        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
