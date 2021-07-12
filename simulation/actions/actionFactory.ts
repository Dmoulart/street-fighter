import {Action} from "./action.js";
import {ActionCommands} from "../../gameEngine/commands.js";
import {Directions, MoveAction} from "./moveAction.js";
import {GameAgent} from "../../gameEngine/gameAgent.js";

export class ActionFactory {

    private static instance:ActionFactory;

    private constructor(){}

    public static getInstance() : ActionFactory{
        if(!this.instance){
            this.instance = new ActionFactory;
        }
        return this.instance;
    }

    public getAction(actionCommand : ActionCommands, agent :GameAgent):Action | null{

        let action:Action | null = null;

        switch(ActionCommands[actionCommand]){

            case ActionCommands[ActionCommands.MOVE_RIGHT]:
                action = new MoveAction(agent.character,Directions.Right);
                break;
            case ActionCommands[ActionCommands.MOVE_LEFT]:
                action = new MoveAction(agent.character,Directions.Left);
                break;
            default: break;
        }

        return action;
    }

}