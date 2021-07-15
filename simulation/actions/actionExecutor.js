import { ActionKeys } from "./action.js";
import { MoveExecutor } from "./moveExecutor.js";
import { JumpExecutor } from "./jumpExecutor.js";
export class ActionExecutor {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionExecutor);
    }
    execute(action) {
        this.getExecutor(action)?.execute(action);
    }
    getExecutor(action) {
        let actionExecutor;
        switch (action.key) {
            case ActionKeys.MOVE_LEFT:
            case ActionKeys.MOVE_RIGHT:
                actionExecutor = new MoveExecutor;
                break;
            case ActionKeys.STILL:
                break;
            case ActionKeys.JUMP:
                actionExecutor = new JumpExecutor;
                break;
            default: break;
        }
        return actionExecutor ?? null;
    }
}
