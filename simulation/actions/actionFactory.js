import { ActionCommands } from "../../gameEngine/commands.js";
import { Directions, MoveAction } from "./moveAction.js";
import { DefaultAction } from "./stillAction.js";
export class ActionFactory {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionFactory);
    }
    getAction(actionCommand, agent) {
        switch (actionCommand) {
            case ActionCommands.MOVE_RIGHT:
                return new MoveAction(agent.character, Directions.Right);
            case ActionCommands.MOVE_LEFT:
                return new MoveAction(agent.character, Directions.Left);
            default:
                return new DefaultAction(agent.character);
        }
    }
}
