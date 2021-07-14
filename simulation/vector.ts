export class Vector {

    public x!: number;
    public y!: number;

    public constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public isEqualTo(vector: Vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    public add(vector: Vector): void {
        this.x += vector.x;
        this.y += vector.y;
    }
    public minus(vector: Vector): void {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    public multiply(vector: Vector): void {
        this.x *= vector.x;
        this.y *= vector.y;
    }

    public static get origin() : Vector{
        return new Vector(0,0);
    }
    public static add(v1:Vector,v2:Vector){
        return new Vector(v1.x + v2.x ,v1.y + v2.y)
    }
}