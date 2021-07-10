import {ROOT_DIR} from "../config/config.js";

export class Sprite{

    public static readonly URL = {
        KEN: "../assets/raw/ken_walk.png"
    }
    public static readonly FRAME = {
        CHARACTER:{
            WIDTH:62,
            HEIGHT:92
        }
    }
    public image!: HTMLImageElement;

    private readonly url !: string;

    public constructor(url:string) {
        this.url = `${ROOT_DIR}/${url}`;
        this.image = new Image();
        this.image.src = this.url;

    }


}