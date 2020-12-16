export class Order {
    orderid: number;
    orderdate: string;
    customer: string;
    products: string[];
	
	constructor(orderid: number, orderdate: string, customer: string, products: string[]){
		this.orderid = orderid;
		this.orderdate = orderdate;
		this.customer = customer;
		this.products = products;
	}
}