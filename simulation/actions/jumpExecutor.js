import { Vector } from "../vector.js";
import { Stage } from "../../objectSystem/stage.js";
export class JumpExecutor {
    execute(action) {
        const move = new Vector(0, action.source.stats.speed);
        const newPosition = Vector.add(action.source.position, move);
        if (Stage.isOutOfBounds(newPosition))
            return;
        return action.source.position.add(move);
    }
}
