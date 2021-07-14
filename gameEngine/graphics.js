import { CanvasLayer } from "./canvasLayer.js";
export class Graphics {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new Graphics);
    }
    initialize() {
        const characterCanvas = new CanvasLayer(Graphics.CHARACTER_CANVAS_LAYER_ID);
        this.canvases = new Map([
            [Graphics.CHARACTER_CANVAS_LAYER_ID, characterCanvas]
        ]);
        return this;
    }
    getCharacterLayer() {
        return this.canvases.get(Graphics.CHARACTER_CANVAS_LAYER_ID);
    }
}
Graphics.CHARACTER_CANVAS_LAYER_ID = "character-layer";
export const graphics = Graphics.getInstance();
