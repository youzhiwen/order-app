import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Order } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class OrderService {

    httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {   
    }    

    getOpenOrders() {		
        return this.http.get<Order[]>(`${environment.apiUrl}/order/getOpenOrders`);		
    }

    getAllFulfilledOrders(){
        return this.http.get<Order[]>(`${environment.apiUrl}/order/getFulfilledOrders`);	
    }

    cancelOrder(orderid: number) {
        console.log("Start to cancel order :" + orderid);
      
        return this.http.post(`${environment.apiUrl}/order/cancelOrder/`, orderid, this.httpOptions).subscribe((response:any) => {
            console.log(response);
          })
    }

    reprintOrder(orderid: number){
        console.log("Start to print order :" + orderid);
        return this.http.post(`${environment.apiUrl}/order/printOrder`, orderid, this.httpOptions).subscribe((response:any) => {
            console.log(response);
        })
    }

    updateBundles(){
        
    }

}