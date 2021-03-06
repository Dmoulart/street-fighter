export class ActionAllocator {
    constructor() { }
    static getInstance() {
        return this.instance ?? (this.instance = new ActionAllocator);
    }
    allocate(character, newAction) {
        return (character.action.canBeReplaced && newAction.isPossible) ?
            (character.action = newAction)
            :
                character.action;
    }
}
