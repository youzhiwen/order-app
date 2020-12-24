export class Rect {
    name: string;
    x: number;
    y: number;
	width: number;
	height: number;
    tx: number;
    ty: number;
	
	constructor(name:string, x: number, y: number, width: number, height: number, tx: number, ty: number){
        this.name = name;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
        this.tx = tx;
        this.ty = ty;
	}
}