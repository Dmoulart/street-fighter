import {ROOT_DIR} from "../config/config.js";
import {loadImage} from "../utils/image.js";
/**
 * Sprite row corresponding to animation
 */
enum AnimationRow{
    Still = 1
}
enum SpriteURL{
    Ken = "../assets/raw/ken_still.png"
}
export class Sprite{

    public static readonly URI = SpriteURL;

    public static readonly ANIMATION_ROW = AnimationRow;

    public image !: HTMLImageElement;

    private readonly url !: string;

    public constructor(url:string) {
        this.url = `${ROOT_DIR}/${url}`;
    }
    public async loadImage(){
        return loadImage(this.url).then(image => this.image = image)
    }
}

export const SPRITES = {
    KEN: new Sprite(Sprite.URI.Ken)
}