import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Order } from '@app/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

	orders: Order[] = [];
	isOpenOrder = true;
	checklist:any;
	selectedOrderID:number;

	page = 1;
    count = 0;
    tableSize = 50;

    constructor(private router: Router, private modalService: NgbModal, private el:ElementRef) {
        
    }

    ngOnInit() {
        this.getOpenOrders();		
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
		this.selectedOrderID = 1001;
		//console.log(this.element.nativeElement)
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