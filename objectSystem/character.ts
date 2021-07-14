import {DEFAULT_STATS, Entity, Stats, UNKNOWN_NAME} from "./entity.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";
import {Animable} from "./animable.js";
import { DefaultAction } from "../simulation/actions/stillAction.js";

export enum CharacterNames {
    Ken = "KEN"
}

export class Character extends Entity implements Drawable, Animable{

    public constructor(sprite:Sprite,
                       name:string = UNKNOWN_NAME,
                       stats:Stats = DEFAULT_STATS) {
        super(sprite,name);
        this.action = new DefaultAction(this);
        this.stats = stats;
    }
}

