import {Character} from "../../objectSystem/character.js";
import {Action} from "./action.js";

export class ActionAllocator{

    private static instance:ActionAllocator;

    private constructor(){}


    public static getInstance() : ActionAllocator{
        return this.instance ?? (this.instance = new ActionAllocator);
    }

    public allocate(character:Character, newAction:Action) : Action{
        return (character.action.canBeReplaced && newAction.isPossible) ?
            (character.action = newAction)
            :
            character.action;
    }

}
