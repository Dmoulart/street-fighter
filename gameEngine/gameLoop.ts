import {engine} from "./engine.js";
import {graphics} from "./graphics.js";
import {GameTime} from "./gameTime.js";
import {Loader} from "./loader.js";
import {$, Assets} from "../assets/assets.js";
import {Player} from "./player.js";
import {Commands} from "./commands.js";
import {ActionFactory} from "../simulation/actions/actionFactory.js";
import {Action} from "../simulation/actions/action.js";
import {ActionHandler} from "../simulation/actions/actionHandler.js";

export class GameLoop{

    private player !: Player;
    private actionFactory :ActionFactory = ActionFactory.getInstance();
    public async load(){

        engine.initialize();
        graphics.initialize();

        return Loader.load();
    }

    public start() : void {
        this.player = new Player;
        this.player.input.listen();
        this.player.character.animation.start()
        GameTime.startTimer();

        this.run();
    }

    private run() : void {

        const command = Commands.getCommandFrom(this.player);
        const action : Action|null = this.actionFactory.getAction(command,this.player);

        if(action){
            this.player.character.action = action;
        }

        ActionHandler.getInstance().updateActionAndAnimation(this.player.character);


        this.clear();
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }

    private draw(): void{
        engine.renderer.render($.CHARACTERS.KEN,graphics.getCharacterLayer())
    }

    private clear():void{
        engine.renderer.clear(graphics.getCharacterLayer());
    }
}