import {Action} from "./action";

export interface IActionExecutor {
    execute(action: Action): void;
}