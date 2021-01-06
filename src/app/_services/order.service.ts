import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { merge } from 'rxjs';

import { environment } from '@environments/environment';
import { Order } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class OrderService {

    constructor(private http: HttpClient) {   
    }    

    getOpenOrders() {		
        return this.http.get<Order[]>(`${environment.apiUrl}/order/getOpenOrders`);		
    }

    getAllFulfilledOrders(){
        return this.http.get<Order[]>(`${environment.apiUrl}/order/getFulfilledOrders`);	
    }

    cancelOrder(orderid: number) {
        return this.http.post(`${environment.apiUrl}/order/cancelOrder`, orderid);
    }

    reprintOrder(orderid: number){
        return this.http.post(`${environment.apiUrl}/order/printOrder`, orderid);
    }

    updateBundles(){
        
    }

}