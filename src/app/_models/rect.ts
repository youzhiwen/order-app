export class Rect {
    name: string;
    x: number;
    y: number;
	width: number;
	height: number;
    tx: number;
    ty: number;
    tag: string;
	
	constructor(name:string, x: number, y: number, width: number, height: number, tx: number, ty: number, tag: string){
        this.name = name;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
        this.tx = tx;
        this.ty = ty;
        this.tag = tag;
	}
}