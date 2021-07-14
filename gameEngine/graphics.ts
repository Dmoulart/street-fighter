import {GameComponent} from "./gameComponent.js";
import {CanvasLayer} from "./canvasLayer.js";

export class Graphics implements GameComponent{

    public static readonly CHARACTER_CANVAS_LAYER_ID :string = "character-layer";
    private static readonly STAGE_CANVAS_LAYER_ID    :string = "stage-layer";


    private static instance:Graphics;
    private canvases!:Map<string, CanvasLayer>;


    private constructor(){}

    public static getInstance() : Graphics{
        return this.instance ?? (this.instance = new Graphics);
    }

    public initialize() : Graphics{
        const characterCanvas = new CanvasLayer(Graphics.CHARACTER_CANVAS_LAYER_ID);
        characterCanvas.canvas.style.zIndex = "2000";
        const stageCanvas     = new CanvasLayer(Graphics.STAGE_CANVAS_LAYER_ID);
        stageCanvas.canvas.style.zIndex = "0";
        this.canvases = new Map([
            [Graphics.CHARACTER_CANVAS_LAYER_ID, characterCanvas],
            [Graphics.STAGE_CANVAS_LAYER_ID, stageCanvas]
        ]);
        return this;
    }

    public getCharacterLayer():CanvasLayer{
        return <CanvasLayer>this.canvases.get(Graphics.CHARACTER_CANVAS_LAYER_ID);
    }
    public getStageLayer():CanvasLayer{
        return <CanvasLayer>this.canvases.get(Graphics.STAGE_CANVAS_LAYER_ID);
    }
}
export const graphics : Graphics = Graphics.getInstance();