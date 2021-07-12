import { ACTION_DURATION } from "../../config/config.js";
import { NOT_STARTED } from "../timable.js";
export class Action {
    constructor(source) {
        this.isDone = false;
        this.duration = ACTION_DURATION;
        this.startTime = Date.now();
        this.source = source;
    }
    start() {
        this.startTime = Date.now();
    }
    stop() {
        this.startTime = NOT_STARTED;
        this.isDone = true;
    }
    get elapsedTime() {
        if (this.startTime === NOT_STARTED)
            return 0;
        return Date.now() - this.startTime;
    }
}
