import {DEFAULT_STATS, Entity, Stats, UNKNOWN_NAME} from "./entity.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";
import {Animable} from "./animable.js";
import { DefaultAction } from "../simulation/actions/stillAction.js";
import {AnimationFrame} from "./animationFrame.js";

export enum CharacterNames {
    Ken = "KEN"
}

export class Character extends Entity implements Drawable, Animable{

    public height: number = AnimationFrame.CHARACTER.HEIGHT;
    public width: number  =  AnimationFrame.CHARACTER.WIDTH;

    public constructor(sprite:Sprite,
                       name:string = UNKNOWN_NAME,
                       stats:Stats = DEFAULT_STATS) {
        super(sprite,name);
        this.action = new DefaultAction(this);
        this.stats = stats;
    }


}

