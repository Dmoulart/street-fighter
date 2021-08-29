import {Character} from "../../objectSystem/character.js";
import {$} from "../../assets/assets.js";
import { Action } from "./action.js";

/**
 * This class is responsible of the starting and ending of actions
 */
export class ActionConductor {

    private static instance:ActionConductor;

    private constructor(){}


    public static getInstance() : ActionConductor{
        return this.instance ?? (this.instance = new ActionConductor);
    }

    public updateAction(action:Action):void{
        if(action.isDone){
            this.stopActionAndAnimation(action.source);
        }
        if(action.hasNotStartedYet){
            this.bindActionToAnimation(action.source);
            this.startActionAndAnimation(action.source);
        }
    }

    private startActionAndAnimation(source:Character):void{
        source.action.start();
        source.animation.start();
    }
    private stopActionAndAnimation(source:Character):void{
        source.action.stop();
        source.animation.stop();
    }
    private bindActionToAnimation(source:Character){
        source.animation = $.ANIMATIONS[source.name][source.action.key];
    }

}