var CharacterDimensions;
(function (CharacterDimensions) {
    CharacterDimensions[CharacterDimensions["WIDTH"] = 130] = "WIDTH";
    CharacterDimensions[CharacterDimensions["HEIGHT"] = 130] = "HEIGHT";
})(CharacterDimensions || (CharacterDimensions = {}));
export class AnimationFrame {
    constructor(params) {
        this.sprite = params.sprite;
        this.sourcePosition = params.sourcePosition;
        this.width = params.width;
        this.height = params.height;
    }
}
//Animation Frame Character Data
AnimationFrame.CHARACTER = CharacterDimensions;
