import { $ } from "../../assets/assets.js";
import { NOT_STARTED } from "../timable.js";
import { ACTION_DURATION } from "../../config/config.js";
import { setDefaultAction } from "./stillAction.js";
export class ActionHandler {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionHandler);
    }
    updateActionAndAnimation(character) {
        if (!character.action)
            return;
        if (character.action.startTime === NOT_STARTED && !character.action.isDone) {
            this.bindActionToAnimation(character);
            this.startActionAndAnimation(character);
        }
        else if (character.action.elapsedTime >= ACTION_DURATION) {
            this.stopActionAndAnimation(character);
        }
    }
    startActionAndAnimation(character) {
        character.action.start();
        character.animation.start();
    }
    stopActionAndAnimation(character) {
        character.action.stop();
        character.animation.stop();
        setDefaultAction(character);
        character.animation = $.ANIMATIONS[character.name].STILL;
        console.log('wololo');
    }
    bindActionToAnimation(character) {
        if (character?.action?.animationKey
            && character?.action?.startTime) {
            character.animation = $.ANIMATIONS[character.name][character.action.animationKey];
        }
    }
}
