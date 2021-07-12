export interface Timable {
    isDone   : boolean;
    startTime: number;
    duration : number;
    start()  : void;
    stop()   : void;
}
export const NOT_STARTED :number = -1;