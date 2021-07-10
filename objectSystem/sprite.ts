import {ROOT_DIR} from "../config/config.js";
import {loadImage} from "../utils/image.js";

export class Sprite{

    public static readonly URL = {
        KEN: "../assets/raw/ken_still.png"
    }

    public image!: HTMLImageElement;

    private readonly url !: string;

    public constructor(url:string) {
        this.url = `${ROOT_DIR}/${url}`;
    }
    public async loadImage(){
        return loadImage(this.url).then(image => this.image = image)
    }
}

/**
 * Sprite row corresponding to animation
 */
export enum SpriteRow{
    STILL = 1
}