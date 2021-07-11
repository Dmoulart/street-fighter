import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
import { GameTime } from "./gameTime.js";
import { Loader } from "./loader.js";
import { $ } from "../assets/assets.js";
import { Player } from "./player.js";
import { Commands } from "./commands.js";
export class GameLoop {
    async load() {
        engine.initialize();
        graphics.initialize();
        this.player = new Player;
        return Loader.load();
    }
    start() {
        this.player.input.listen();
        GameTime.startTimer();
        //Assign animation in order to test
        $.CHARACTERS.KEN.animation = $.ANIMATIONS.KEN.STILL;
        this.run();
    }
    run() {
        Commands.getCommandFrom(this.player);
        this.clear();
        this.draw();
        requestAnimationFrame(this.run.bind(this));
    }
    draw() {
        engine.renderer.render($.CHARACTERS.KEN, graphics.getCharacterLayer());
    }
    clear() {
        engine.renderer.clear(graphics.getCharacterLayer());
    }
}
