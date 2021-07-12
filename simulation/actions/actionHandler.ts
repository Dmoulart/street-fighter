import {Character} from "../../objectSystem/character.js";
import {$} from "../../assets/assets.js";

export class ActionHandler{
    private static instance:ActionHandler;

    private constructor(){}

    public static getInstance() : ActionHandler{
        return this.instance ?? (this.instance = new ActionHandler);
    }

    public handleCharacterAction(character:Character){
        if( character?.action?.animationKey
        && !character?.action?.startTime){
            character.animation = $.ANIMATIONS[character.name][character.action.animationKey];
            character.animation.start();
        }

    }
}