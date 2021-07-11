import {Input} from "./input.js";
import {GameAgent} from "./gameAgent.js";
import {Character} from "../objectSystem/character.js";
import {$} from "../assets/assets.js";

export class Player extends GameAgent{

    public readonly input !: Input;

    public constructor(input:Input = new Input, character:Character = $.CHARACTERS.KEN) {
        super();
        this.input = input;
        this.input.player = this;
        this.character = character;
    }

}