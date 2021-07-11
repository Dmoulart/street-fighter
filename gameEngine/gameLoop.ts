import {engine} from "./engine.js";
import {graphics} from "./graphics.js";
import {GameTime} from "./gameTime.js";
import {Loader} from "./loader.js";
import {$, Assets} from "../assets/assets.js";

export class GameLoop{

    public async load(){

        engine.initialize();
        graphics.initialize();

        return Loader.load();
    }

    public start() : void {
        GameTime.startTimer();

        //Assign animation in order to test
        $.CHARACTERS.KEN.animation = $.ANIMATIONS.KEN.STILL;

        this.run();
    }

    private run() : void {
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