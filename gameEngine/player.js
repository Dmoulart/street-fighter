import { Input } from "./input.js";
import { GameAgent } from "./gameAgent.js";
export class Player extends GameAgent {
    constructor(input = new Input) {
        super();
        this.input = input;
        this.input.player = this;
    }
}
