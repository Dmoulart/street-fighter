import {GameComponent} from "./gameComponent.js";
import {CanvasLayer} from "./canvasLayer.js";

export class Graphics implements GameComponent{

    public static readonly CHARACTER_CANVAS_LAYER_ID = "character-layer";

    private static instance:Graphics;
    private canvases!:Map<string, CanvasLayer>;

    private constructor(){}

    public static getInstance() : Graphics{
        if(!this.instance){
            this.instance = new Graphics;
        }
        return this.instance;
    }

    public initialize() : Graphics{
        const characterCanvas = new CanvasLayer(Graphics.CHARACTER_CANVAS_LAYER_ID);
        this.canvases = new Map([
           [ Graphics.CHARACTER_CANVAS_LAYER_ID,characterCanvas]
        ]);
        return this;
    }

    public getCharacterLayer():CanvasLayer{
        return <CanvasLayer>this.canvases.get(Graphics.CHARACTER_CANVAS_LAYER_ID);
    }
}
export const graphics : Graphics = Graphics.getInstance();