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

//type ActionCommand = keyof typeof ActionCommands;

export class Commands {

    public static getCommandFrom(agent:GameAgent): ActionCommands{
        if(agent instanceof Player){
            return Commands.getCommandFromPlayer(
                (<Player>agent).input.pressedKeys,
                (<Player>agent).input.config
            );
        }
        else{
            throw new Error('Not implemented');
        }
    }

    public static getCommandFromPlayer(sourceKeys : Map<string,boolean>,
                                       config : PlayerConfig) : ActionCommands{

        const sourceKeysMatchTargetKeys = (sourceKeys:Map<string,boolean>) => (targetKeys: string[]) => {
            return targetKeys.every(targetKey => sourceKeys.get(targetKey));
        }

        return this.getActionCommand(sourceKeysMatchTargetKeys(sourceKeys), config) ?? ActionCommands.NONE;
    }

    private static getActionCommand(pressedKeysMatch: (targetKeys: string[]) => boolean, config: PlayerConfig) {
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