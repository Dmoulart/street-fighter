import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
import { GameTime } from "./gameTime.js";
import { Loader } from "./loader.js";
import { $ } from "../assets/assets.js";
import { Player } from "./player.js";
import { Commands } from "./commands.js";
import { DefaultAction } from "../simulation/actions/stillAction.js";
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
        this.player.character.action = new DefaultAction(this.player.character);
        this.player.character.action.start();
        this.player.character.animation.start();
        GameTime.startTimer();
        this.run();
    }
    run() {
        const command = Commands.getCommandFrom(this.player);
        const action = _.action.factory.getAction(command, this.player);
        _.action.allocator.allocate(this.player.character, action);
        _.action.conductor.updateAction(this.player.character);
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
