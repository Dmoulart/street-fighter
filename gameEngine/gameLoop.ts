import {engine} from "./engine.js";
import {graphics} from "./graphics.js";
import {GameTime} from "./gameTime.js";
import {Loader} from "./loader.js";
import {$} from "../assets/assets.js";
import {Player} from "./player.js";
import {ActionCommands, Commands} from "./commands.js";
import {Action} from "../simulation/actions/action.js";
import {_} from "../simulation/simulationServices.js";


export class GameLoop{

    private player !: Player;


    public async load(){

        engine.initialize();
        graphics.initialize();

        await Loader.load();
        return this;
    }

    public start() : void {
        this.player = new Player;
        this.player.input.listen();

        GameTime.startTimer();

        this.run();
    }

    private run() : void {

        const command : ActionCommands = Commands.getCommandFrom(this.player);
        const action  : Action         = _.action.factory.getAction(command,this.player);


        _.action.allocator.allocate(this.player.character, action);

        _.action.conductor.updateAction(this.player.character);

        _.action.executor.execute(this.player.character.action);


        this.clear();
        this.draw();

        requestAnimationFrame(this.run.bind(this));
    }

    private draw(): void{
        engine.renderer.render($.STAGES.BLANKA ,graphics.getCharacterLayer())
        engine.renderer.render($.CHARACTERS.KEN,graphics.getCharacterLayer())
    }

    private clear():void{
        engine.renderer.clear(graphics.getCharacterLayer());
    }
}