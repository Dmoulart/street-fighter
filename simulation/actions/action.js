import { ACTION_DURATION } from "../../config/config.js";
export class Action {
    constructor(source) {
        this.isDone = false;
        this.duration = ACTION_DURATION;
        this.startTime = Date.now();
        this.source = source;
    }
}
