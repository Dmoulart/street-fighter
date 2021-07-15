import { Action, ActionKeys } from "./action.js";
export class JumpAction extends Action {
    constructor(character) {
        super(character);
        this.key = ActionKeys.JUMP;
    }
    get isPossible() {
        return this.isNotOfSameActionTypeAs(this.source.action)
            && this.source.action.isDone;
    }
}
