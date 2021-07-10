import { ROOT_DIR } from "../config/config.js";
import { loadImage } from "../utils/image.js";
export class Sprite {
    constructor(url) {
        this.url = `${ROOT_DIR}/${url}`;
    }
    async loadImage() {
        return loadImage(this.url).then(image => this.image = image);
    }
}
Sprite.URL = {
    KEN: "../assets/raw/ken_still.png"
};
/**
 * Sprite row corresponding to animation
 */
export var SpriteRow;
(function (SpriteRow) {
    SpriteRow[SpriteRow["STILL"] = 1] = "STILL";
})(SpriteRow || (SpriteRow = {}));
