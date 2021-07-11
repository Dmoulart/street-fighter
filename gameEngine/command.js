var ActionCommands;
(function (ActionCommands) {
    ActionCommands[ActionCommands["NONE"] = 0] = "NONE";
    ActionCommands[ActionCommands["MOVE_RIGHT"] = 1] = "MOVE_RIGHT";
    ActionCommands[ActionCommands["MOVE_LEFT"] = 2] = "MOVE_LEFT";
    ActionCommands[ActionCommands["JUMP"] = 3] = "JUMP";
    ActionCommands[ActionCommands["BOW"] = 4] = "BOW";
})(ActionCommands || (ActionCommands = {}));
export class Command {
    static getCommand(pressedKeys, config) {
        let actionCommand = ActionCommands.NONE;
        const detectKeyPress = (sourceKeys) => (targetKeys) => {
            let isPressed = true;
            targetKeys.forEach(commandKey => {
                if (!pressedKeys.get(commandKey)) {
                    isPressed = false;
                }
            });
            return isPressed;
        };
        const keys = detectKeyPress(pressedKeys);
        switch (true) {
            case keys(config.moveKeys.moveRight):
                actionCommand = ActionCommands.MOVE_RIGHT;
                break;
            case keys(config.moveKeys.moveLeft):
                actionCommand = ActionCommands.MOVE_LEFT;
                break;
            case keys(config.moveKeys.Jump):
                actionCommand = ActionCommands.JUMP;
                break;
            case keys(config.moveKeys.Bow):
                actionCommand = ActionCommands.BOW;
                break;
            default: break;
        }
        return actionCommand;
    }
}
Command.ACTION = ActionCommands;
