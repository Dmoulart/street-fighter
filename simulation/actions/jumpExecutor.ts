import {Vector} from "../vector.js";
import {Stage} from "../../objectSystem/stage.js";
import {JumpAction} from "./jumpAction.js";
import {IActionExecutor} from "./IactionExecutor";

export class JumpExecutor implements IActionExecutor{

    public execute(action:JumpAction){

        const move        :Vector = new Vector(0,action.source.stats.speed);
        const newPosition :Vector = Vector.add(action.source.position, move);

        if(Stage.isOutOfBounds(newPosition)) return;

        return action.source.position.add(move);
    }

}