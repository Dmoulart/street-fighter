import { ROOT_DIR } from "../config/config.js";
import { loadImage } from "../utils/image.js";
/**
 * Sprite row corresponding to animation
 */
var AnimationRow;
(function (AnimationRow) {
    AnimationRow[AnimationRow["STILL"] = 1] = "STILL";
    AnimationRow[AnimationRow["MOVE_RIGHT"] = 2] = "MOVE_RIGHT";
    AnimationRow[AnimationRow["MOVE_LEFT"] = 3] = "MOVE_LEFT";
})(AnimationRow || (AnimationRow = {}));
var SpriteURL;
(function (SpriteURL) {
    SpriteURL["KEN"] = "../assets/sprites/characters/ken.png";
    SpriteURL["BLANKA_STAGE"] = "../assets/sprites/stages/blanka.png";
})(SpriteURL || (SpriteURL = {}));
export class Sprite {
    constructor(url = "empty") {
        this.url = `${ROOT_DIR}/${url}`;
    }
    async loadImage() {
        return loadImage(this.url).then(image => {
            return this.image = image;
        });
    }
}
Sprite.URI = SpriteURL;
Sprite.ANIMATION_ROW = AnimationRow;
