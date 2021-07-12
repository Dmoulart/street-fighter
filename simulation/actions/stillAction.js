import { Action } from "./action.js";
export class StillAction extends Action {
    constructor(character) {
        super(character);
        this.animationKey = `STILL`;
    }
}
export const setDefaultAction = (character) => new StillAction(character);
