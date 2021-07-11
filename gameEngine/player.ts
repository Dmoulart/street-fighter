import {Input} from "./input.js";

export class Player {

    public readonly input !: Input;

    public constructor(input:Input = new Input) {
        this.input = input;
        this.input.player = this;
    }
}