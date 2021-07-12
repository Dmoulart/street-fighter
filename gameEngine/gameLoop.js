import { engine } from "./engine.js";
import { graphics } from "./graphics.js";
import { GameTime } from "./gameTime.js";
import { Loader } from "./loader.js";
import { $ } from "../assets/assets.js";
import { Player } from "./player.js";
import { Commands } from "./commands.js";
import { ActionFactory } from "../simulation/actions/actionFactory.js";
import { ActionHandler } from "../simulation/actions/actionHandler.js";
export class GameLoop {
    constructor() {
        this.actionFactory = ActionFactory.getInstance();
    }
    async load() {
        engine.initialize();
        graphics.initialize();
        return Loader.load();
    }
    start() {
        this.player = new Player;
        this.player.input.listen();
        this.player.character.animation.start();
        GameTime.startTimer();
        this.run();
    }
    run() {
        const command = Commands.getCommandFrom(this.player);
        const action = this.actionFactory.getAction(command, this.player);
        if (action) {
            this.player.character.action = action;
        }
        ActionHandler.getInstance().updateActionAndAnimation(this.player.character);
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
