export class Order {
    orderid: number;
    orderdate: string;
	customer: string;
	status: string;
	products: string[];
	isSelected: boolean;
	
	constructor(orderid: number, orderdate: string, customer: string, status: string, products: string[]){
		this.orderid = orderid;
		this.orderdate = orderdate;
		this.customer = customer;
		this.status = status;
		this.products = products;
		this.isSelected = false;
	}
}