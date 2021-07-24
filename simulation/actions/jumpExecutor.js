import { Vector } from "../vector.js";
export class JumpExecutor {
    execute(action) {
        const move = new Vector(0, -action.source.stats.speed);
        const newPosition = Vector.add(action.source.position, move);
        //if(Stage.isOutOfBounds(newPosition)) return;
        action.source.position.add(move);
    }
}
