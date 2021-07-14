export function isDrawable(object) {
    return 'sprite' in object
        && 'width' in object
        && 'height' in object;
}
