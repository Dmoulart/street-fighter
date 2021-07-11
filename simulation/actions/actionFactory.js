import { ActionCommands } from "../../gameEngine/commands.js";
import { Directions, MoveAction } from "./moveAction.js";
export class ActionFactory {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ActionFactory;
        }
        return this.instance;
    }
    getAction(actionCommand, agent) {
        let action = null;
        switch (ActionCommands[actionCommand]) {
            case ActionCommands[ActionCommands.MOVE_RIGHT]:
                action = new MoveAction(agent.character, Directions.Right);
                break;
            case ActionCommands[ActionCommands.MOVE_LEFT]:
                action = new MoveAction(agent.character, Directions.Left);
                break;
            default: break;
        }
        return action;
    }
}
