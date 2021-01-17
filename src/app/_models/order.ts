export class Order {
    order_id: string;
    orderdate: string;
	customer: string;
	deliveryaddress1: string;
	deliveryaddress2: string;
	deliveryaddress3: string;
	deliverycity: string;
	deliverycode: number;
	status: string;
	bundled: boolean;
	bundles: string[];
	isSelected: boolean;
	
	constructor(order_id: string, orderdate: string, customer: string, deliveryaddress1: string, 
		deliveryaddress2: string, deliveryaddress3: string, deliverycity: string, deliverycode: number, 
		bundled: boolean, status: string, bundles: string[], isSelected: boolean,){
		this.order_id = order_id;
		this.orderdate = orderdate;
		this.customer = customer;
		this.deliveryaddress1 = deliveryaddress1;
		this.deliveryaddress2 = deliveryaddress2;
		this.deliveryaddress3 = deliveryaddress3;
		this.deliverycity = deliverycity;
		this.deliverycode = deliverycode;
		this.bundled = bundled;
		this.status = status;
		this.bundles = this.bundles;
		this.isSelected = false;
	}
}