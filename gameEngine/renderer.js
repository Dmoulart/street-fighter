import { isAnimable } from "../objectSystem/animable.js";
import { isDrawable } from "../objectSystem/drawable.js";
import { AnimationFrame } from "../objectSystem/animationFrame.js";
export class Renderer {
    initialize() {
    }
    render(entity, layer) {
        const drawOrder = Renderer.getDrawOrder(entity);
        layer.context.drawImage(drawOrder.sprite.image, 
        //SourceX            SourceY
        drawOrder.sX, drawOrder.sY, 
        //SourceWidth        SourceHeight
        drawOrder.sWidth, drawOrder.sHeight, 
        //DestinationX       DestinationY
        drawOrder.dX, drawOrder.dY, 
        //DestionationWidth, DestinationHeight
        drawOrder.dWidth, drawOrder.dHeight);
    }
    clear(layer) {
        layer.context.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
    }
    static getDrawOrder(entity) {
        const getAnimableDrawOrder = (animable) => {
            let frame = animable.animation.currentFrame;
            return {
                sprite: animable.sprite,
                sX: frame.x, sY: frame.y,
                sWidth: AnimationFrame.CHARACTER.WIDTH,
                sHeight: AnimationFrame.CHARACTER.HEIGHT,
                dX: animable.position.x,
                dY: animable.position.y,
                dWidth: AnimationFrame.CHARACTER.WIDTH,
                dHeight: AnimationFrame.CHARACTER.HEIGHT
            };
        };
        const getDrawableDrawOrder = (drawable) => {
            return {
                sprite: drawable.sprite,
                sX: 0, sY: 0,
                sWidth: AnimationFrame.CHARACTER.WIDTH,
                sHeight: AnimationFrame.CHARACTER.HEIGHT,
                dX: drawable.position.x,
                dY: drawable.position.y,
                dWidth: AnimationFrame.CHARACTER.WIDTH,
                dHeight: AnimationFrame.CHARACTER.HEIGHT
            };
        };
        let drawOrder;
        switch (true) {
            case isAnimable(entity):
                drawOrder = getAnimableDrawOrder(entity);
                break;
            case isDrawable(entity):
                drawOrder = getDrawableDrawOrder(entity);
                break;
            default:
                throw new Error("entity can't be drawn");
        }
        return drawOrder;
    }
}
