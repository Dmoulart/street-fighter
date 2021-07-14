import {ActionFactory}   from "./actions/actionFactory.js";
import {ActionAllocator} from "./actions/actionAllocator.js";
import {ActionConductor} from "./actions/actionConductor.js";

/**
 * Alias for simulation services
 */
export const _ = {
    action:{
        factory   : ActionFactory.getInstance(),
        allocator : ActionAllocator.getInstance(),
        conductor : ActionConductor.getInstance()
    },
}