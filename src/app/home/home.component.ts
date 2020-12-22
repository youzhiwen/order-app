import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

	orders: Order[] = [];
	isOpenOrder = true;
	checklist:any;
	selectedOrderID:number;
	selectedOrder: Order;

	page = 1;
    count = 0;
    tableSize = 10;

    constructor(private router: Router, private modalService: NgbModal, private http: HttpClient) {
        
    }

    ngOnInit() {
        this.getOpenOrders();		
	}
	
	clicked(order: Order, i: number){
		this.selectedOrder = order;
		console.log(this.selectedOrder)

		if(this.isOpenOrder){
			this.element = document.getElementById('flexCheckDefault'+i) as HTMLInputElement;
			this.element.checked = this.element.checked?false:true;
			console.log(this.element.checked);
		}else{
			this.element = document.getElementById('flexRadioDefault'+i) as HTMLInputElement;
			this.element.checked = true;
		}
		
	}
   
	checkUncheckAll() {
		for (var i = 0; i < this.checklist.length; i++) {
		  
		}
		
	  }
	
	goBundle() {        
        this.router.navigate(['/bundle']);
	}

	getOpenOrders() {        
		this.isOpenOrder = true;
		this.orders = [];
		for(var i=0; i<100; i++){
			var order = new Order(
				1000+i,
				'02/12/2020',
				'PaknSave Christchurch',
				'Open',				
				['GM', 'GC', 'F1']
			);
			this.orders.push(order);
		}
	}
	
	getFulfilledOrders(){
		this.isOpenOrder = false;
		this.orders = [];
		for(var i=0; i<10; i++){
			var order = new Order(
				2000+i,
				'02/12/2020',
				'PaknSave Auckland',
				'fulfilled',				
				['GM', 'GC', 'F1']
			);
			this.orders.push(order);
		}
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