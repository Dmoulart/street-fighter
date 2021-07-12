export const UNKNOWN_NAME = "unknown";
export class Entity {
    constructor(sprite, name = UNKNOWN_NAME) {
        this.sprite = sprite;
        this.name = name;
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
