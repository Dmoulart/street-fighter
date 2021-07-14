import {ROOT_DIR} from "../config/config.js";
import {loadImage} from "../utils/image.js";

/**
 * Sprite row corresponding to animation
 */

enum AnimationRow{
    STILL       = 1,
    MOVE_RIGHT  = 2,
    MOVE_LEFT   = 3
}
enum SpriteURL{
    KEN = "../assets/sprites/ken.png"
}

export class Sprite{

    public static readonly URI = SpriteURL;

    public static readonly ANIMATION_ROW = AnimationRow;

    public image !: HTMLImageElement;

    private readonly url !: string;

    public constructor(url:string = "empty") {
        this.url = `${ROOT_DIR}/${url}`;
    }
    public async loadImage(){
        return loadImage(this.url).then(image => {
            return this.image = image
        })
    }
}