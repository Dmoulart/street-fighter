import {PlayerConfig} from "./input.js";

enum ActionCommands{
    NONE,
    MOVE_RIGHT,
    MOVE_LEFT,
    JUMP,
    BOW,
}

type ActionCommand = keyof typeof ActionCommands;

export class Command{

    public static ACTION = ActionCommands;

    public static getCommand(pressedKeys : Map<string,boolean>,
                             config : PlayerConfig) : ActionCommands{

        let actionCommand : ActionCommands = ActionCommands.NONE;

        const detectKeyPress =  (sourceKeys:Map<string,boolean>) => (targetKeys: string[]) => {
            let isPressed: boolean = true;
            targetKeys.forEach(commandKey => {
                if (!pressedKeys.get(commandKey)) {
                    isPressed = false;
                }
            })
            return isPressed;
        }

        const keys = detectKeyPress(pressedKeys);

        switch(true){
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