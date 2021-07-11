import {Entity} from "../../objectSystem/entity.js";

export abstract class Action{

    protected readonly source!:Entity;

    protected animationKey!:string|null;

    protected constructor(source:Entity) {
        this.source = source;
    }


}