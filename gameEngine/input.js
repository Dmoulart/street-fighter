const defaultMoveKeys = {
    moveLeft: ["ArrowLeft"],
    moveRight: ["ArrowRight"],
    Jump: ["ArrowUp"],
    Bow: ["ArrowDown"]
};
const defaultConfig = {
    moveKeys: defaultMoveKeys
};
export class Input {
    constructor(config = defaultConfig) {
        this.config = config;
        this._pressedKeys = new Map();
        this.addPressedKey = this.addPressedKey.bind(this);
        this.removeUnpressedKey = this.removeUnpressedKey.bind(this);
    }
    listen() {
        onkeydown = this.addPressedKey;
        onkeyup = this.removeUnpressedKey;
        return this._pressedKeys;
    }
    get pressedKeys() {
        return this._pressedKeys;
    }
    addPressedKey(e) {
        this._pressedKeys.set(e.key, true);
    }
    removeUnpressedKey(e) {
        this._pressedKeys.delete(e.key);
    }
}
