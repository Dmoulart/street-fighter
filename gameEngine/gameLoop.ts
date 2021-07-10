import {engine} from "./engine.js";
import {graphics} from "./graphics.js";

export class GameLoop{

    public load():GameLoop{
        engine.initialize();
        graphics.initialize();
        return this;
    }

    public start() : void {
        this.run();
    }

    private run() : void {
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }

    private draw(): void{
        engine.renderer.draw(graphics.getCharacterLayer())
    }
}