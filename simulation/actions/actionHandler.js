import { $ } from "../../assets/assets.js";
export class ActionHandler {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionHandler);
    }
    handleCharacterAction(character) {
        if (character?.action?.animationKey
            && !character?.action?.startTime) {
            character.animation = $.ANIMATIONS[character.name][character.action.animationKey];
            character.animation.start();
        }
    }
}
