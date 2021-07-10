import {ROOT_DIR} from "../config/config.js";
import {loadImage} from "../utils/image.js";

export class Sprite{

    public static readonly URL = {
        KEN: "../assets/raw/ken_still.png"
    }
    public static readonly FRAME = {
        CHARACTER:{
            WIDTH:65,
            HEIGHT:100
        }
    }
    public image!: HTMLImageElement;

    private readonly url !: string;

    public constructor(url:string) {
        this.url = `${ROOT_DIR}/${url}`;
        // this.image = new Image();
        // this.image.src = this.url;

        // loadImage(this.url).then(image => this.image = image);
    }
    public async loadImage(){
        return loadImage(this.url).then(image => this.image = image)
    }
}