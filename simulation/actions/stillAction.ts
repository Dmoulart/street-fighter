import {Action} from "./action.js";
import {Character} from "../../objectSystem/character.js";

export class StillAction extends Action {

    public constructor(character:Character) {
        super(character);
        this.key = `STILL`;
    }
    public get isPossible():boolean{
        return this.isNotOfSameActionTypeAs(this.source.action)
        && this.source.action.isDone;
    }
}
export const DefaultAction = StillAction;