import { Input } from "./input.js";
import { GameAgent } from "./gameAgent.js";
import { $ } from "../assets/assets.js";
import { Vector } from "../simulation/vector.js";
import { Stage } from "../objectSystem/stage.js";
export class Player extends GameAgent {
    constructor(input = new Input, character = $.CHARACTERS.KEN) {
        super();
        this.input = input;
        this.input.player = this;
        this.character = character;
        this.character.position = new Vector(100, Stage.groundHeight);
    }
}
