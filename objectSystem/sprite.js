import { ROOT_DIR } from "../config/config.js";
export class Sprite {
    constructor(url) {
        this.url = `${ROOT_DIR}/${url}`;
        this.image = new Image();
        this.image.src = this.url;
    }
}
Sprite.URL = {
    KEN: "../assets/raw/ken_walk.png"
};
Sprite.FRAME = {
    CHARACTER: {
        WIDTH: 62,
        HEIGHT: 92
    }
};
