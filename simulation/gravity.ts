import {Entity} from "../objectSystem/entity.js";
import {Vector} from "./vector.js";
import {Stage} from "../objectSystem/stage.js";

export class Gravity{

    private static instance:Gravity;
    private static readonly force:Vector = new Vector(0,-4);

    private constructor(){}


    public static getInstance() : Gravity{
        return this.instance ?? (this.instance = new Gravity);
    }

    public apply(...entities:Entity[]) : void {
        entities.forEach(entity => {
            const newPosition :Vector = Vector.minus(entity.position, Gravity.force);
            if(Stage.isOutOfBounds(newPosition)) return;
            entity.position = newPosition;
        })
    }
}