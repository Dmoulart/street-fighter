import { CanvasLayer } from "./canvasLayer.js";
export class Graphics {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new Graphics);
    }
    initialize() {
        const characterCanvas = new CanvasLayer(Graphics.CHARACTER_CANVAS_LAYER_ID);
        characterCanvas.canvas.style.zIndex = "2000";
        const stageCanvas = new CanvasLayer(Graphics.STAGE_CANVAS_LAYER_ID);
        stageCanvas.canvas.style.zIndex = "0";
        this.canvases = new Map([
            [Graphics.CHARACTER_CANVAS_LAYER_ID, characterCanvas],
            [Graphics.STAGE_CANVAS_LAYER_ID, stageCanvas]
        ]);
        return this;
    }
    getCharacterLayer() {
        return this.canvases.get(Graphics.CHARACTER_CANVAS_LAYER_ID);
    }
    getStageLayer() {
        return this.canvases.get(Graphics.STAGE_CANVAS_LAYER_ID);
    }
}
Graphics.CHARACTER_CANVAS_LAYER_ID = "character-layer";
Graphics.STAGE_CANVAS_LAYER_ID = "stage-layer";
export const graphics = Graphics.getInstance();
