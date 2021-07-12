import {Character} from "../../objectSystem/character.js";
import {$} from "../../assets/assets.js";
import {NOT_STARTED} from "../timable.js";
import {ACTION_DURATION} from "../../config/config.js";
import {setDefaultAction} from "./stillAction.js";

export class ActionHandler{
    private static instance:ActionHandler;

    private constructor(){}

    public static getInstance() : ActionHandler{
        return this.instance ?? (this.instance = new ActionHandler);
    }
    public updateActionAndAnimation(character:Character):void{
        if(!character.action) return;

        if(character.action.startTime === NOT_STARTED && !character.action.isDone){
            this.bindActionToAnimation(character);
            this.startActionAndAnimation(character);
        }
        else if(character.action.elapsedTime >= ACTION_DURATION){
            this.stopActionAndAnimation(character);
        }

    }
    private startActionAndAnimation(character:Character):void{
        character.action.start();
        character.animation.start();
    }
    private stopActionAndAnimation(character:Character):void{
        character.action.stop();
        character.animation.stop();
        setDefaultAction(character);
        character.animation = $.ANIMATIONS[character.name].STILL;
        console.log('wololo')
    }
    private bindActionToAnimation(character:Character){
        if( character?.action?.animationKey
        &&  character?.action?.startTime){
            character.animation = $.ANIMATIONS[character.name][character.action.animationKey];
        }
    }
}