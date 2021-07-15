import {GAME_RESOLUTION} from "../config/config.js";

export abstract class Canvas{

    public canvas!:HTMLCanvasElement;
    public context!:any;

    protected constructor(id:string = "none",
                          width:number  = GAME_RESOLUTION.width,
                          height:number = GAME_RESOLUTION.height) {

        const canvasElement = document.createElement('canvas');

        canvasElement.id = id;

        canvasElement.width  = width;
        canvasElement.height = height;

        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;

    }

    clear():void{
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        )
    }
}