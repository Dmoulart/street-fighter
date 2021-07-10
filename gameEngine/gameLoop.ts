import {engine} from "./engine.js";
import {graphics} from "./graphics.js";
import {ken} from "../objectSystem/character.js";
import {GameTime} from "./gameTime.js";
import {Loader} from "./loader.js";


export class GameLoop{

    public async load(){

        engine.initialize();
        graphics.initialize();

        return Loader.load();
    }

    public start() : void {
        GameTime.startTimer();
        this.run();
    }

    private run() : void {
        this.clear();
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }

    private draw(): void{
        engine.renderer.render(ken,graphics.getCharacterLayer())
    }

    private clear():void{
        engine.renderer.clear(graphics.getCharacterLayer());
    }
}