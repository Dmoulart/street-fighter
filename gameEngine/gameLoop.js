import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
import { GameTime } from "./gameTime.js";
import { Loader } from "./loader.js";
import { CHARACTERS } from "../objectSystem/character.js";
export class GameLoop {
    async load() {
        engine.initialize();
        graphics.initialize();
        return Loader.load();
    }
    start() {
        GameTime.startTimer();
        CHARACTERS.KEN.animation = Loader.loadedAnimations.KEN.STILL;
        this.run();
    }
    run() {
        this.clear();
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }
    draw() {
        engine.renderer.render(CHARACTERS.KEN, graphics.getCharacterLayer());
    }
    clear() {
        engine.renderer.clear(graphics.getCharacterLayer());
    }
}
