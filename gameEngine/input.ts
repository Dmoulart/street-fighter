import {Player} from "./player.js";

export type MoveKeys = {
    moveLeft  : string[],
    moveRight : string[],
    Jump      : string[],
    Bow       : string[]
}
export type PlayerConfig = {
    moveKeys:MoveKeys
}

const defaultMoveKeys : MoveKeys = {
    moveLeft  : ["ArrowLeft" ],
    moveRight : ["ArrowRight"],
    Jump      : ["ArrowUp"   ],
    Bow       : ["ArrowDown" ]
}
const defaultConfig = {
    moveKeys:defaultMoveKeys
}

export class Input{

    public player !:Player;
    public config !:PlayerConfig;

    private readonly _pressedKeys !: Map<string,boolean>;

    public constructor(config:PlayerConfig = defaultConfig) {
        this.config             = config;
        this._pressedKeys       = new Map<string, boolean>();

        this.addPressedKey      = this.addPressedKey.bind(this);
        this.removeUnpressedKey = this.removeUnpressedKey.bind(this);
    }

    public listen() :Map<string,boolean>{

        onkeydown = this.addPressedKey;
        onkeyup   = this.removeUnpressedKey;

        return this._pressedKeys;
    }

    public get pressedKeys() : Map<string,boolean>{
        return this._pressedKeys;
    }

    private addPressedKey(e:KeyboardEvent) : void {
       this._pressedKeys.set(e.key,true);
    }
    private removeUnpressedKey(e:KeyboardEvent) : void {
        this._pressedKeys.delete(e.key)
    }


}