import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
export class GameLoop {
    load() {
        engine.initialize();
        graphics.initialize();
        return this;
    }
    start() {
        this.run();
    }
    run() {
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }
    draw() {
        engine.renderer.draw(graphics.getCharacterLayer());
    }
}
