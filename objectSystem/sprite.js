import { ROOT_DIR } from "../config/config.js";
import { loadImage } from "../utils/image.js";
/**
 * Sprite row corresponding to animation
 */
var AnimationRow;
(function (AnimationRow) {
    AnimationRow[AnimationRow["Still"] = 1] = "Still";
})(AnimationRow || (AnimationRow = {}));
var SpriteURL;
(function (SpriteURL) {
    SpriteURL["Ken"] = "../assets/raw/ken_still.png";
})(SpriteURL || (SpriteURL = {}));
export class Sprite {
    constructor(url) {
        this.url = `${ROOT_DIR}/${url}`;
    }
    async loadImage() {
        return loadImage(this.url).then(image => this.image = image);
    }
}
Sprite.URI = SpriteURL;
Sprite.ANIMATION_ROW = AnimationRow;
export const SPRITES = {
    KEN: new Sprite(Sprite.URI.Ken)
};
