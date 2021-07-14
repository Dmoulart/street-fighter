import {Action} from "./action.js";
import {ActionCommands} from "../../gameEngine/commands.js";
import {Directions, MoveAction} from "./moveAction.js";
import {GameAgent} from "../../gameEngine/gameAgent.js";
import { DefaultAction } from "./stillAction.js";

export class ActionFactory {

    private static instance:ActionFactory;

    private constructor(){}


    public static getInstance() : ActionFactory{
        return this.instance ?? (this.instance = new ActionFactory);
    }
    public getAction(actionCommand : ActionCommands, agent :GameAgent):Action{

        switch(actionCommand){

            case ActionCommands.MOVE_RIGHT:
                return new MoveAction(agent.character,Directions.Right);

            case ActionCommands.MOVE_LEFT:
                return new MoveAction(agent.character,Directions.Left);

            default:
                return new DefaultAction(agent.character);

        }

    }

}