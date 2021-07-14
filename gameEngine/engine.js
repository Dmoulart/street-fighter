import { Renderer } from "./renderer.js";
export class Engine {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new Engine);
    }
    initialize() {
        this.renderer = new Renderer;
        return this;
    }
}
export const engine = Engine.getInstance();
