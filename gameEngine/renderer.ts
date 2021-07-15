import {GameComponent} from "./gameComponent.js";
import {CanvasLayer} from "./canvasLayer.js";
import {Sprite} from "../objectSystem/sprite.js";
import {Entity} from "../objectSystem/entity.js";
import {Animable, isAnimable} from "../objectSystem/animable.js";
import {Drawable, isDrawable} from "../objectSystem/drawable.js";
import {AnimationFrame} from "../objectSystem/animationFrame.js";

type DrawOrder = {
    sprite: Sprite;

    //Source
    sX    : number; sY     : number;
    sWidth: number; sHeight: number;

    //Destination
    dX    : number; dY     : number;
    dWidth: number; dHeight: number
};

export class Renderer implements GameComponent{


    public initialize() : void{

    }

    public render(entity: Entity, layer : CanvasLayer):void{
        const drawOrder = Renderer.getDrawOrder(entity);
        layer.context.drawImage(drawOrder.sprite.image,
            //SourceX            SourceY
            drawOrder.sX,        drawOrder.sY,

            //SourceWidth        SourceHeight
            drawOrder.sWidth,    drawOrder.sHeight,

            //DestinationX       DestinationY
            drawOrder.dX,        drawOrder.dY,

            //DestionationWidth, DestinationHeight
            drawOrder.dWidth,    drawOrder.dHeight
        );
    }

    public clear(layer : CanvasLayer):void{
        layer.context.clearRect(0,0,layer.canvas.width,layer.canvas.height);
    }

    private static getDrawOrder(entity: Entity) : DrawOrder {

        const getAnimableDrawOrder = (animable: Animable) => {
            let frame = animable.animation.currentFrame;

            return {
                sprite:animable.sprite,

                sX:frame.sourcePosition.x,
                sY:frame.sourcePosition.y,

                sWidth : animable.width,
                sHeight: animable.height,

                dX: (<Entity>animable).position.x,
                dY: (<Entity>animable).position.y,

                dWidth : animable.width,
                dHeight: animable.height
            }
        }
        const getDrawableDrawOrder = (drawable: Drawable) => {
            return {
                sprite:drawable.sprite,

                sX:0,sY:0,

                sWidth : drawable.width,
                sHeight: drawable.height,

                dX: (<Entity>drawable).position.x,
                dY: (<Entity>drawable).position.y,

                dWidth : drawable.width,
                dHeight: drawable.height
            }
        }

        let drawOrder : DrawOrder;
        switch (true) {
            case isAnimable(entity):
                drawOrder = getAnimableDrawOrder(<Animable>entity);
                break;
            case isDrawable(entity):
                drawOrder = getDrawableDrawOrder(<Drawable>entity);
                break;
            default :
                throw new Error("entity can't be drawn");
        }
        return drawOrder;
    }


}