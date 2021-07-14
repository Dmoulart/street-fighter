import {Action, ActionKeys} from "./action.js";
import {IActionExecutor} from "./IactionExecutor.js";
import {MoveExecutor} from "./moveExecutor.js";

export class ActionExecutor {

    private static instance:ActionExecutor;

    private constructor(){}


    public static getInstance() : ActionExecutor{
        return this.instance ?? (this.instance = new ActionExecutor);
    }

    public execute(action:Action):void{
        this.getExecutor(action)?.execute(action);
    }

    private getExecutor(action: Action) :IActionExecutor|null{
        let actionExecutor;
        switch(action.key){
            case ActionKeys.MOVE_LEFT:
            case ActionKeys.MOVE_RIGHT:
                actionExecutor = new MoveExecutor;
                break;
            case ActionKeys.STILL:
                break;
            default: break;

        }
        return actionExecutor ?? null;
    }

}