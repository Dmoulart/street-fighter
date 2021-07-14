import { FPS } from "../config/config.js";
export class GameTime {
    static startTimer() {
        if (GameTime._start)
            throw new Error("GameTime has already been started");
        return (GameTime._start = Date.now());
    }
    static get start() {
        return GameTime._start;
    }
    static get elapsed() {
        return GameTime.current - GameTime.start;
    }
    static get current() {
        return Date.now();
    }
    static get lag() {
        return (GameTime._lag += GameTime.elapsed);
    }
}
GameTime.FPS = FPS;
//Set the frame duration in milliseconds
GameTime.FRAME_DURATION = GameTime.FPS / 1000;
GameTime._lag = 0;
