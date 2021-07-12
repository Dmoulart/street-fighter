import {Action} from "./action.js";
import {Character} from "../../objectSystem/character.js";

export class StillAction extends Action {
    public constructor(character:Character) {
        super(character);
        this.animationKey = `STILL`;
    }
}
export const setDefaultAction = (character:Character) => new StillAction(character);