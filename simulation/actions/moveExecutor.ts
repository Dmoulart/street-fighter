import {IActionExecutor} from "./IactionExecutor.js";
import {Directions, MoveAction} from "./moveAction.js";
import {Vector} from "../vector.js";
import {Stage} from "../../objectSystem/stage.js";

export class MoveExecutor implements IActionExecutor{

    public execute(action: MoveAction): void {

        const move        :Vector = this.getMove(action);
        const newPosition :Vector = Vector.add(action.source.position, move);

        if(Stage.isOutOfBounds(newPosition)) return;

        return action.source.position.add(move);
    }

    private getMove(action: MoveAction) :Vector{
        let   move;
        const speed = action.source.stats.speed;
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

            default : throw new Error('Move direction not recognized')

        }
        return move;
    }

}