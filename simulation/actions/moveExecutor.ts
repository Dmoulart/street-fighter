import {IActionExecutor} from "./IactionExecutor.js";
import {Directions, MoveAction} from "./moveAction.js";
import {Vector} from "../vector.js";
import {STAGE_DIMENSIONS} from "../../config/config.js";
import {AnimationFrame} from "../../objectSystem/animationFrame.js";

export class MoveExecutor implements IActionExecutor{

    public execute(action: MoveAction): void {

        const move:Vector = this.getMove(action);
        const newPosition = Vector.add(action.source.position, move);

        if(this.isOutOfStageBounds(newPosition)) return;

        return action.source.position.add(move);
    }

    private getMove(action: MoveAction) :Vector{
        let move;
        let speed = action.source.stats.speed;
        switch (action.direction) {

            case Directions.Right:
                move = new Vector(speed, 0);
                break;

            case Directions.Left:
                move = new Vector(-speed, 0);
                break;

            case Directions.Down:
                move = new Vector(0, speed);
                break;

            case Directions.Up:
                move = new Vector(0, -speed);
                break;

            default : throw new Error('Move Directions not recognized')

        }
        return move;
    }

    private isOutOfStageBounds(position: Vector):boolean {

        return position.x < 0
            || position.y < 0
            || position.x > STAGE_DIMENSIONS.WIDTH  - AnimationFrame.CHARACTER.WIDTH
            || position.y > STAGE_DIMENSIONS.HEIGHT - AnimationFrame.CHARACTER.HEIGHT;
    }
}