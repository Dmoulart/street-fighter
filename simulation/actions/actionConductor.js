import { $ } from "../../assets/assets.js";
/**
 * This class is responsible of the starting and ending of actions
 */
export class ActionConductor {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionConductor);
    }
    updateAction(action) {
        if (action.isDone) {
            this.stopActionAndAnimation(action.source);
        }
        if (action.hasNotStartedYet) {
            this.bindActionToAnimation(action.source);
            this.startActionAndAnimation(action.source);
        }
    }
    startActionAndAnimation(source) {
        source.action.start();
        source.animation.start();
    }
    stopActionAndAnimation(source) {
        source.action.stop();
        source.animation.stop();
    }
    bindActionToAnimation(source) {
        source.animation = $.ANIMATIONS[source.name][source.action.key];
    }
}
