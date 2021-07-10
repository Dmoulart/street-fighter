export class CanvasLayer {
    constructor(id) {
        const canvasElement = document.createElement('canvas');
        canvasElement.id = id;
        canvasElement.style.width = "80vw";
        canvasElement.style.height = "80vh";
        this.canvas = canvasElement;
        document.body.append(this.canvas);
    }
}
