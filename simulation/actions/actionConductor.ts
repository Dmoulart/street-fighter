import {Character} from "../../objectSystem/character.js";
import {$} from "../../assets/assets.js";

/**
 * This class is responsible of the starting and ending of actions
 */
export class ActionConductor {

    private static instance:ActionConductor;

    private constructor(){}


    public static getInstance() : ActionConductor{
        return this.instance ?? (this.instance = new ActionConductor);
    }

    public updateAction(character:Character):void{
        if(character.action.isDone){
            this.stopActionAndAnimation(character);
        }
        if(character.action.hasNotStartedYet){
            this.bindActionToAnimation(character);
            this.startActionAndAnimation(character);
        }
    }

    private startActionAndAnimation(character:Character):void{
        character.action.start();
        character.animation.start();
    }
    private stopActionAndAnimation(character:Character):void{
        character.action.stop();
        character.animation.stop();
    }
    private bindActionToAnimation(character:Character){
        character.animation = $.ANIMATIONS[character.name][character.action.key];
    }

}