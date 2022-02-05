import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../entity/purchase';
import { OrderTracking } from '../entity/order-tracking.model';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
private purchaseURL ="http://localhost:9096"
  constructor(private httpClient: HttpClient) {}
  placeOrder(purchase: Purchase):Observable<OrderTracking>{
    return this.httpClient.post<OrderTracking>(`${this.purchaseURL}/api/checkout/purchase`,purchase);
  }
}
