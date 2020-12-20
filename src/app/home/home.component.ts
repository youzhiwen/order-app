import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '@app/_models';
import { Order } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
	orders: Order[] = [];
	isOpenOrder = true;
	checklist:any;

	page = 1;
    count = 0;
    tableSize = 7;
    tableSizes = [3, 6, 9, 12];

    constructor(
	    private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });		
    }

    ngOnInit() {
        this.getOpenOrders();		
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
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
		for(var i=0; i<10; i++){
			var order = new Order(
				i,
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
				i,
				'02/12/2020',
				'PaknSave Auckland',
				'fulfilled',				
				['GM', 'GC', 'F1']
			);
			this.orders.push(order);
		}
	}

	cancelOrder(){
		
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