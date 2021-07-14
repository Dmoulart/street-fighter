import { Player } from "./player.js";
export var ActionCommands;
(function (ActionCommands) {
    ActionCommands[ActionCommands["NONE"] = 0] = "NONE";
    ActionCommands[ActionCommands["MOVE_RIGHT"] = 1] = "MOVE_RIGHT";
    ActionCommands[ActionCommands["MOVE_LEFT"] = 2] = "MOVE_LEFT";
    ActionCommands[ActionCommands["JUMP"] = 3] = "JUMP";
    ActionCommands[ActionCommands["BOW"] = 4] = "BOW";
})(ActionCommands || (ActionCommands = {}));
//type ActionCommand = keyof typeof ActionCommands;
export class Commands {
    static getCommandFrom(agent) {
        if (agent instanceof Player) {
            return Commands.getCommandFromPlayer(agent.input.pressedKeys, agent.input.config);
        }
        else {
            throw new Error('Not implemented');
        }
    }
    static getCommandFromPlayer(sourceKeys, config) {
        const sourceKeysMatchTargetKeys = (sourceKeys) => (targetKeys) => {
            return targetKeys.every(targetKey => sourceKeys.get(targetKey));
        };
        return this.getActionCommand(sourceKeysMatchTargetKeys(sourceKeys), config) ?? ActionCommands.NONE;
    }
    static getActionCommand(pressedKeysMatch, config) {
        let actionCommand;
        switch (true) {
            case pressedKeysMatch(config.moveKeys.moveRight):
                actionCommand = ActionCommands.MOVE_RIGHT;
                break;
            case pressedKeysMatch(config.moveKeys.moveLeft):
                actionCommand = ActionCommands.MOVE_LEFT;
                break;
            case pressedKeysMatch(config.moveKeys.Jump):
                actionCommand = ActionCommands.JUMP;
                break;
            case pressedKeysMatch(config.moveKeys.Bow):
                actionCommand = ActionCommands.BOW;
                break;
            default:
                break;
        }
        return actionCommand;
    }
}
