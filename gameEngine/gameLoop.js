import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
import { ken } from "../objectSystem/character.js";
import { GameTime } from "./gameTime.js";
export class GameLoop {
    load() {
        engine.initialize();
        graphics.initialize();
        return this;
    }
    start() {
        GameTime.startTimer();
        this.run();
    }
    run() {
        this.clear();
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }
    draw() {
        engine.renderer.render(ken, graphics.getCharacterLayer());
    }
    clear() {
        engine.renderer.clear(graphics.getCharacterLayer());
    }
}
