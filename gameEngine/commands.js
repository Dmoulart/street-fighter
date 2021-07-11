export var ActionCommands;
(function (ActionCommands) {
    ActionCommands[ActionCommands["NONE"] = 0] = "NONE";
    ActionCommands[ActionCommands["MOVE_RIGHT"] = 1] = "MOVE_RIGHT";
    ActionCommands[ActionCommands["MOVE_LEFT"] = 2] = "MOVE_LEFT";
    ActionCommands[ActionCommands["JUMP"] = 3] = "JUMP";
    ActionCommands[ActionCommands["BOW"] = 4] = "BOW";
})(ActionCommands || (ActionCommands = {}));
export class Commands {
    static getCommandFrom(agent) {
        return Commands.getCommand(agent.input.pressedKeys, agent.input.config);
    }
    static getCommand(sourceKeys, config) {
        const sourceKeysMatchTargetKeys = (sourceKeys) => (targetKeys) => {
            let isPressed = true;
            targetKeys.forEach(commandKey => {
                if (!sourceKeys.get(commandKey)) {
                    isPressed = false;
                }
            });
            return isPressed;
        };
        return this.getActionCommand(sourceKeysMatchTargetKeys(sourceKeys), config) ?? ActionCommands.NONE;
    }
    static getActionCommand(keysArePressed, config) {
        let actionCommand;
        switch (true) {
            case keysArePressed(config.moveKeys.moveRight):
                actionCommand = ActionCommands.MOVE_RIGHT;
                break;
            case keysArePressed(config.moveKeys.moveLeft):
                actionCommand = ActionCommands.MOVE_LEFT;
                break;
            case keysArePressed(config.moveKeys.Jump):
                actionCommand = ActionCommands.JUMP;
                break;
            case keysArePressed(config.moveKeys.Bow):
                actionCommand = ActionCommands.BOW;
                break;
            default:
                break;
        }
        return actionCommand;
    }
}
Commands.ACTION = ActionCommands;
