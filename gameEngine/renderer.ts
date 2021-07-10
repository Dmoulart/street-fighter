import {GameComponent} from "./gameComponent.js";
import {CanvasLayer} from "./canvasLayer.js";
import {Sprite} from "../objectSystem/sprite.js";
import {Entity} from "../objectSystem/entity.js";
import {Animable, isAnimable} from "../objectSystem/Animable.js";
import {Drawable, isDrawable} from "../objectSystem/drawable.js";

type DrawOrder = {
    sprite: Sprite;
    //Source
    sX: number; sY: number;
    sWidth: number; sHeight: number;
    //Destination
    dX: number; dY: number;
    dWidth: number; dHeight: number
};

export class Renderer implements GameComponent{


    public initialize() : void{

    }

    public render(entity: Entity, layer : CanvasLayer):void{
        const drawOrder = Renderer.getDrawOrder(entity);

        layer.context.drawImage(drawOrder.sprite.image,
            //SourceX, SourceY
            drawOrder.sX,drawOrder.sY,

            //SourceWidth, SourceHeight
            drawOrder.sWidth,drawOrder.sHeight,

            //DestinationX, DestinationY
            drawOrder.dX,drawOrder.dY,

            //DestionationWidth, DestinationHeight
            drawOrder.dWidth,drawOrder.dHeight
        );
    }

    public clear(layer : CanvasLayer):void{
        layer.context.clearRect(0,0,layer.canvas.width,layer.canvas.height);
    }

    private static getDrawOrder(entity: Entity) : DrawOrder {

        const getAnimableDrawOrder = (animable: Animable) => {
            let frame = animable.animation.currentFrame;
            if(!frame){
                console.log(frame);
                console.log(animable);
            }

            return {
                sprite:animable.sprite,

                sX:frame.x,sY:frame.y,

                sWidth:Sprite.FRAME.CHARACTER.WIDTH,
                sHeight:Sprite.FRAME.CHARACTER.HEIGHT,

                dX:0,dY:0,

                dWidth:Sprite.FRAME.CHARACTER.WIDTH,
                dHeight:Sprite.FRAME.CHARACTER.HEIGHT
            }
        }
        const getDrawableDrawOrder = (drawable: Drawable) => {
            return {
                sprite:drawable.sprite,

                sX:0,sY:0,

                sWidth:Sprite.FRAME.CHARACTER.WIDTH,
                sHeight:Sprite.FRAME.CHARACTER.HEIGHT,

                dX:0,dY:0,

                dWidth:Sprite.FRAME.CHARACTER.WIDTH,
                dHeight:Sprite.FRAME.CHARACTER.HEIGHT
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