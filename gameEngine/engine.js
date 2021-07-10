import { Renderer } from "./renderer.js";
export class Engine {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Engine;
        }
        return this.instance;
    }
    initialize() {
        this.renderer = new Renderer;
        return this;
    }
}
export const engine = Engine.getInstance();
