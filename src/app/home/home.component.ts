import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Order } from '@app/_models';
import { OrderService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

	element: HTMLInputElement;

	orderList: Order[] = [];
	checkedOrderList: any;
	isOpenOrder = true;
	checklist:any;
	selectedOrderID:string;
	selectedOrder: Order;
	isMasterSel:boolean;

	page = 1;
    count = 0;
    tableSize = 10;

    constructor(private router: Router, private modalService: NgbModal, private http: HttpClient, private orderService: OrderService) {
        this.isMasterSel = false;
    }

    ngOnInit() {
		this.getOpenOrders();	

	}
	
	/*clickedRow(order: Order, i: number){
		this.selectedOrder = order;
		console.log(this.selectedOrder)

		if(this.isOpenOrder){
			this.element = document.getElementById('flexCheckDefault'+i) as HTMLInputElement;
			this.element.checked = this.element.checked?false:true;
			this.orderList[i].isSelected = this.element.checked;
			this.getCheckedOrderList();

		}else{
			this.element = document.getElementById('flexRadioDefault'+i) as HTMLInputElement;
			this.element.checked = true;
		}
		// if all orders are selected, isMasterSel will be checked
		let k = 0;
		for (let j = 0; j < this.orderList.length; j++) {
		  if (this.orderList[j].isSelected === true) {
			k++;
			if (k === this.orderList.length) {
			  return this.isMasterSel = true;
			}
		  }
		}
		// if one order is not selected, isMasterSel will be unchecked
			if (this.orderList[i].isSelected === false) {
			  this.isMasterSel = false;
			}
		return this.orderList[i].isSelected;

	}
	*/

	checkUncheckAll() {
		for (var i = 0; i < this.orderList.length; i++) {
			this.orderList[i].isSelected = this.isMasterSel;
			console.log(i);
			console.log(this.isMasterSel);
		}
		this.getCheckedOrderList();		
		console.log(this.checkedOrderList);

	}

	isAllSelected() {
		this.isMasterSel = this.orderList.every(function(order:any) {
			return order.isSelected == true;
		  })
		this.getCheckedOrderList();
	}

	getCheckedOrderList(){
		this.checkedOrderList = [];
		for (var i = 0; i < this.orderList.length; i++) {
		  if(this.orderList[i].isSelected)
		  this.checkedOrderList.push(this.orderList[i]);
		}
		this.checkedOrderList = JSON.stringify(this.checkedOrderList);
	}
	
	ifCheckedAndGoBundle(checkedOrderList: any, message:string) {     

        if(this.selectedOrder){
			this.selectedOrderID = this.selectedOrder.orderId;
			this.router.navigate(['/bundle'],{queryParams:checkedOrderList});
		}
		else{
			this.modalService.open(message);
		}
	}

	getOpenOrders() {        
		this.isOpenOrder = true;
		this.orderList = [];
		/*
		//below is for test---
		this.orderList =[
		    {orderId: 'D01344', orderdate: '23-12-2020', customer: 'Alice', deliveryaddress1:'343adsfa4', 
			deliveryaddress2: '3434asdf', deliveryaddress3: 'sadfa', deliverycity: 'asdfd', deliverycode: 45, 
			bundled: true, status: '00', bundles: [], isSelected: false},
		
			{orderId: 'D01345', orderdate: '23-12-2020', customer: 'Thomas', deliveryaddress1:'343adsfa4', 
			deliveryaddress2: '3434asdf', deliveryaddress3: 'sadfa', deliverycity: 'asdfd', deliverycode: 45, 
			bundled: true, status: '00', bundles: [], isSelected: false},
		
			{orderId: 'D01346', orderdate: '23-12-2020', customer: 'Tyty', deliveryaddress1:'343adsfa4', 
			deliveryaddress2: '3434asdf', deliveryaddress3: 'sadfa', deliverycity: 'asdfd', deliverycode: 45, 
			bundled: true, status: '00', bundles: [], isSelected: false},
		];
		//---to here!
		*/
		this.orderService.getOpenOrders().subscribe(orders => {
			this.orderList = orders;
		});
	}
	getFulfilledOrders(){
		this.isOpenOrder = false;
		this.orderList = [];
		/*
		//below is for test---
		this.orderList =[
			
		    {orderId: 'D01347', orderdate: '23-12-2020', customer: 'Ryry', deliveryaddress1:'343adsfa4', 
			deliveryaddress2: '3434asdf', deliveryaddress3: 'sadfa', deliverycity: 'asdfd', deliverycode: 45, 
			bundled: true, status: '01', bundles: [], isSelected: false},
		
			{orderId: 'D01348', orderdate: '23-12-2020', customer: 'Fen', deliveryaddress1:'343adsfa4', 
			deliveryaddress2: '3434asdf', deliveryaddress3: 'sadfa', deliverycity: 'asdfd', deliverycode: 45, 
			bundled: true, status: '01', bundles: [], isSelected: false},
		
			{orderId: 'D01349', orderdate: '23-12-2020', customer: 'Daniel', deliveryaddress1:'343adsfa4', 
			deliveryaddress2: '3434asdf', deliveryaddress3: 'sadfa', deliverycity: 'asdfd', deliverycode: 45, 
			bundled: true, status: '01', bundles: [], isSelected: false},
		];
				//---to here!
				*/
		this.orderService.getAllFulfilledOrders().subscribe(orders => {
			this.orderList = orders;
		});
	}

	displayProducts(product: string){
		var productCSS = '';
		switch(product){
			case 'GM': 
				productCSS = "badge bg-primary";
				break;
			case 'GC':
				productCSS = "badge bg-secondary";
				break;
			case 'F1':
				productCSS = "badge bg-success";
				break;
		}
		console.log(productCSS);
        return productCSS;
	}

	ifCheckedAndCancel(content:string , message:string)
	{
		
		if(this.selectedOrder){
			this.selectedOrderID = this.selectedOrder.orderId;
			this.modalService.open(content);
		}
		else
		{
		this.modalService.open(message);
		}
	}

	confirmCancelOrder(selectedOrderID){
		this.modalService.dismissAll();
		this.orderService.cancelOrder(selectedOrderID);
		console.log(selectedOrderID + ",Cancel is done.");
	}

	ifCheckedAndPrint(print:string , message:string)
	{
		
		if(this.selectedOrder){
			this.selectedOrderID = this.selectedOrder.orderId;
			this.modalService.open(print);				
			console.log("Start print order :" + this.selectedOrderID);
		}else
		{console.log(this.selectedOrderID);
		this.modalService.open(message);
		}
	  }

	confirmPrintOrder(selectedOrderID){
		this.modalService.dismissAll();
		//invoke printOrder api
		this.orderService.reprintOrder(this.selectedOrderID);
		console.log(this.selectedOrderID + ",Reprint is done.");
	}
   
	onTableDataChange(event){
		this.page = event;		
	}  

	onTableSizeChange(event): void {
		this.tableSize = event.target.value;
		this.page = 1;
		this.getOpenOrders();		
	  }  
}