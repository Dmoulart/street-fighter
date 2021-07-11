import {Input} from "./input.js";
import {GameAgent} from "./gameAgent.js";

export class Player extends GameAgent{

    public readonly input !: Input;

    public constructor(input:Input = new Input) {
        super();
        this.input = input;
        this.input.player = this;
    }
}