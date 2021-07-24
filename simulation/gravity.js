import { Vector } from "./vector.js";
import { Stage } from "../objectSystem/stage.js";
export class Gravity {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new Gravity);
    }
    apply(...entities) {
        entities.forEach(entity => {
            const newPosition = Vector.minus(entity.position, Gravity.force);
            if (Stage.isOutOfBounds(newPosition))
                return;
            entity.position = newPosition;
        });
    }
}
Gravity.force = new Vector(0, -4);
