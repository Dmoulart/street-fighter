import { ACTION_MINIMUM_DURATION } from "../../config/config.js";
import { NOT_STARTED } from "../timable.js";
export var ActionKeys;
(function (ActionKeys) {
    ActionKeys["STILL"] = "STILL";
    ActionKeys["MOVE"] = "MOVE_";
    ActionKeys["MOVE_LEFT"] = "MOVE_LEFT";
    ActionKeys["MOVE_RIGHT"] = "MOVE_RIGHT";
})(ActionKeys || (ActionKeys = {}));
export class Action {
    constructor(source) {
        this.isRunning = false;
        this.duration = ACTION_MINIMUM_DURATION;
        this.startTime = NOT_STARTED;
        this.source = source;
    }
    start() {
        this.startTime = Date.now();
        this.isRunning = true;
    }
    stop() {
        this.isRunning = false;
    }
    isOfSameActionTypeAs(action) {
        return this.key === action.key;
    }
    isNotOfSameActionTypeAs(action) {
        return !this.isOfSameActionTypeAs(action);
    }
    get isPossible() {
        return this.isNotOfSameActionTypeAs(this.source.action);
    }
    get elapsedTime() {
        if (this.startTime === NOT_STARTED)
            return 0;
        return Date.now() - this.startTime;
    }
    get isDone() {
        return this.elapsedTime >= this.duration;
    }
    get hasNotStartedYet() {
        return this.startTime === NOT_STARTED;
    }
}
