import { ROOT_DIR } from "../config/config.js";
import { loadImage } from "../utils/image.js";
export class Sprite {
    constructor(url) {
        this.url = `${ROOT_DIR}/${url}`;
        // this.image = new Image();
        // this.image.src = this.url;
        // loadImage(this.url).then(image => this.image = image);
    }
    async loadImage() {
        return loadImage(this.url).then(image => this.image = image);
    }
}
Sprite.URL = {
    KEN: "../assets/raw/ken_still.png"
};
Sprite.FRAME = {
    CHARACTER: {
        WIDTH: 65,
        HEIGHT: 100
    }
};
