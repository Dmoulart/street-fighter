import { $ } from "../../assets/assets.js";
/**
 * This class is responsible of the starting and ending of actions
 */
export class ActionConductor {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionConductor);
    }
    updateAction(character) {
        if (character.action.isDone) {
            this.stopActionAndAnimation(character);
        }
        if (character.action.hasNotStartedYet) {
            this.bindActionToAnimation(character);
            this.startActionAndAnimation(character);
        }
    }
    startActionAndAnimation(character) {
        character.action.start();
        character.animation.start();
    }
    stopActionAndAnimation(character) {
        character.action.stop();
        character.animation.stop();
    }
    bindActionToAnimation(character) {
        character.animation = $.ANIMATIONS[character.name][character.action.key];
    }
}
