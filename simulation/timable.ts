export interface Timable {
    isRunning   : boolean;
    startTime   : number;
    duration    : number;
    isDone      : boolean;
    start()     : void;
    stop()      : void;
}
export const NOT_STARTED :number = -1;