import { GameLoop } from './gameLoop.js';
let gameLoop = new GameLoop;
gameLoop.load().then(_ => gameLoop.start());
