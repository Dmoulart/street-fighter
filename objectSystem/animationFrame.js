export class AnimationFrame {
    constructor(params) {
        this.sprite = params.sprite;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
    }
}
AnimationFrame.DIMENSIONS = {
    CHARACTER: {
        WIDTH: 65,
        HEIGHT: 100
    }
};
