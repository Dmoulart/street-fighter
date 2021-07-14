export function isAnimable(object) {
    //We check not only if object has an animation field but if object has an animation setted
    return 'animation' in object && object['animation'] !== undefined;
}
