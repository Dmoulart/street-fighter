import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
import { GameTime } from "./gameTime.js";
import { Loader } from "./loader.js";
import { $ } from "../assets/assets.js";
import { Player } from "./player.js";
import { Commands } from "./commands.js";
import { _ } from "../simulation/simulationServices.js";
export class GameLoop {
    async load() {
        engine.initialize();
        graphics.initialize();
        await Loader.load();
        return this;
    }
    start() {
        this.player = new Player;
        this.player.input.listen();
        GameTime.startTimer();
        this.run();
    }
    run() {
        const command = Commands.getCommandFrom(this.player);
        const action = _.action.factory.getAction(command, this.player);
        _.action.allocator.allocate(this.player.character, action);
        _.action.conductor.updateAction(this.player.character);
        _.action.executor.execute(this.player.character.action);
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
