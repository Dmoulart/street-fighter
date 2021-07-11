var CharacterDimensions;
(function (CharacterDimensions) {
    CharacterDimensions[CharacterDimensions["WIDTH"] = 65] = "WIDTH";
    CharacterDimensions[CharacterDimensions["HEIGHT"] = 100] = "HEIGHT";
})(CharacterDimensions || (CharacterDimensions = {}));
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
AnimationFrame.CHARACTER = CharacterDimensions;
