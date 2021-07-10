import {Entity} from "./entity.js";
import {Drawable} from "./drawable.js";
import {Sprite} from "./sprite.js";
import {Animable} from "./Animable.js";
import {Animation} from "./animation.js";
import {AnimationBuilder} from "./animationBuilder.js";

export class Character extends Entity implements Drawable, Animable{

    public sprite!: Sprite;
    public animation!: Animation;

    public constructor(sprite:Sprite) {
        super();
        this.sprite = sprite;
        this.animation = AnimationBuilder.getInstance().build(sprite,1);
        console.log(this.animation);
    }


}
export const ken = new Character(new Sprite(Sprite.URL.KEN));