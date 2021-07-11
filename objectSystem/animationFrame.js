var Character;
(function (Character) {
    Character[Character["Width"] = 65] = "Width";
    Character[Character["Height"] = 100] = "Height";
})(Character || (Character = {}));
export class AnimationFrame {
    constructor(params) {
        this.sprite = params.sprite;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
    }
}
//Animation Frame Character Data
AnimationFrame.Character = Character;
