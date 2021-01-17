﻿import { Component, OnInit } from '@angular/core';
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
	
	clickedRow(order: Order, i: number){
		this.selectedOrder = order;
		console.log(this.selectedOrder)

		if(this.isOpenOrder){
			this.element = document.getElementById('flexCheckDefault'+i) as HTMLInputElement;
			this.element.checked = this.element.checked?false:true;
			this.orderList[i].isSelected = this.element.checked;
			this.getCheckedOrderList();
			console.log(this.checkedOrderList);

		}else{
			this.element = document.getElementById('flexRadioDefault'+i) as HTMLInputElement;
			this.element.checked = true;
		}
		
	}
   
	checkUncheckAll() {
		for (var i = 0; i < this.orderList.length; i++) {
			this.orderList[i].isSelected = this.isMasterSel;
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
	
	goBundle(checkedOrderList: any) {     

        this.router.navigate(['/bundle'],{queryParams:checkedOrderList});
	}

	getOpenOrders() {        
		this.isOpenOrder = true;
		this.orderList = [];
		
		this.orderService.getOpenOrders().subscribe(orders => {
			this.orderList = orders;
		});
	}
	
	getFulfilledOrders(){
		this.isOpenOrder = false;
		this.orderList = [];
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

	cancelOrder(content){
		this.modalService.open(content);
		this.selectedOrderID = this.selectedOrder.order_id;	
	}

	confirmCancelOrder(selectedOrderID){
		this.modalService.dismissAll();
		this.orderService.cancelOrder(selectedOrderID);
		console.log(selectedOrderID + ",Cancel is done.");
	}

	printOrder(print){
		this.modalService.open(print);
		this.selectedOrderID = this.selectedOrder.order_id;		
        console.log("Start print order :" + this.selectedOrderID);		
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