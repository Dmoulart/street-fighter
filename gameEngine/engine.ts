import {Renderer} from "./renderer.js";

export class Engine{

    public renderer!:Renderer;
    private static instance:Engine;

    private constructor(){}

    public static getInstance() : Engine{
        return this.instance ?? (this.instance = new Engine);
    }
    public initialize() : Engine{
        this.renderer = new Renderer;
        return this;
    }

}
export const engine : Engine = Engine.getInstance();