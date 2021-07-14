import { Action, ActionKeys } from "./action.js";
export class StillAction extends Action {
    constructor(character) {
        super(character);
        this.key = ActionKeys.STILL;
    }
    get isPossible() {
        return this.isNotOfSameActionTypeAs(this.source.action)
            && this.source.action.isDone;
    }
}
export const DefaultAction = StillAction;
