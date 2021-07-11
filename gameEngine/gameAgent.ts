import {Character} from "../objectSystem/character";

export abstract class GameAgent {
    private _character!:Character;
    public set character(character:Character){
        this._character = character;
    }
    public get character(){
        return this._character;
    }
}