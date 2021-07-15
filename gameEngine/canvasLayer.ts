import {Canvas} from "./Canvas.js";

export class CanvasLayer extends Canvas{

    constructor(id:string) {
        super(id)
        document.body.append(this.canvas);
    }

}