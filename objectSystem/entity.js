import { Vector } from "../simulation/vector.js";
export const UNKNOWN_NAME = "unknown";
export const DEFAULT_STATS = {
    speed: 4
};
export class Entity {
    constructor(sprite, name = UNKNOWN_NAME, position = Vector.origin, stats = DEFAULT_STATS) {
        this.sprite = sprite;
        this.name = name;
        this.position = position;
        this.stats = stats;
    }
    get action() {
        return this._action;
    }
    set action(action) {
        this._action = action;
    }
    get animation() {
        return this._animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
}
