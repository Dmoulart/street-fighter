import {PlayerConfig} from "./input.js";
import {GameAgent} from "./gameAgent";
import {Player} from "./player.js";

export enum ActionCommands{
    NONE,
    MOVE_RIGHT,
    MOVE_LEFT,
    JUMP,
    BOW,
}

type ActionCommand = keyof typeof ActionCommands;

export class Commands {

    public static ACTION = ActionCommands;

    public static getCommandFrom(agent:GameAgent){
        return Commands.getCommand((<Player>agent).input.pressedKeys,(<Player>agent).input.config);
    }

    public static getCommand(sourceKeys : Map<string,boolean>,
                             config : PlayerConfig) : ActionCommands{

        const sourceKeysMatchTargetKeys = (sourceKeys:Map<string,boolean>) => (targetKeys: string[]) => {
            let isPressed: boolean = true;
            targetKeys.forEach(commandKey => {
                if (!sourceKeys.get(commandKey)) {
                    isPressed = false;
                }
            })
            return isPressed;
        }

        return this.getActionCommand(sourceKeysMatchTargetKeys(sourceKeys), config) ?? ActionCommands.NONE;
    }

    private static getActionCommand(keysArePressed: (targetKeys: string[]) => boolean, config: PlayerConfig) {
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