import { Input } from "./input.js";
export class Player {
    constructor(input = new Input) {
        this.input = input;
        this.input.player = this;
    }
}
