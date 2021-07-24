export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    isEqualTo(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    minus(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    }
    static get origin() {
        return new Vector(0, 0);
    }
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static minus(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
}
