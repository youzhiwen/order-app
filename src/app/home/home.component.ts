import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Order } from '@app/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

	element: HTMLInputElement;

	orderList: Order[] = [];
	checkedOrderList: any;
	isOpenOrder = true;
	checklist:any;
	selectedOrderID:number;
	selectedOrder: Order;
	isMasterSel:boolean;

	page = 1;
    count = 0;
    tableSize = 10;

    constructor(private router: Router, private modalService: NgbModal, private http: HttpClient) {
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
	
	goBundle() {        
        this.router.navigate(['/bundle']);
	}

	getOpenOrders() {        
		this.isOpenOrder = true;
		this.orderList = [];
		for(var i=0; i<11; i++){
			var order = new Order(
				1000+i,
				'02/12/2020',
				'PaknSave Christchurch',
				'Open',				
				['GM', 'GC', 'F1']
			);
			this.orderList.push(order);
		}
	}
	
	getFulfilledOrders(){
		this.isOpenOrder = false;
		this.orderList = [];
		for(var i=0; i<10; i++){
			var order = new Order(
				2000+i,
				'02/12/2020',
				'PaknSave Auckland',
				'fulfilled',				
				['GM', 'GC', 'F1']
			);
			this.orderList.push(order);
		}
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
		this.selectedOrderID = this.selectedOrder.orderid;

		//invoke cancelOrder api
		this.http.get("https://jsonplaceholder.typicode.com/todos/1", {
  			observe: "response"
		})
			.subscribe(res => {
   				console.dir("Response: " + res.status);
		});
	}

	printOrder(print){
		this.modalService.open(print);
		this.selectedOrderID = this.selectedOrder.orderid;

		//invoke printOrder api
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