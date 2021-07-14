import {GameLoop} from './gameLoop.js';


(new GameLoop).load().then(loop => loop.start());