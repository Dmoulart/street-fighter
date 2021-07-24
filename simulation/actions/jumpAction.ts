import {Action, ActionKeys} from "./action.js";
import {Character} from "../../objectSystem/character.js";

export class JumpAction extends Action {

    public constructor(character:Character) {
        super(character);
        this.key = ActionKeys.JUMP;
        this.isStoppable = false;

        this.bindDurationToAnimationDuration(character);
    }
    public get isPossible():boolean{
        return this.isNotOfSameActionTypeAs(this.source.action)
            && this.source.action.isDone;
    }
}
