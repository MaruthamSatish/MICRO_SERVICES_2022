/**
 * 
 */
package com.easytobuy.service;
import com.easytobuy.entity.Purchase;
import com.easytobuy.entity.PurchaseResponse;

/**
 * @author Satish Reddy
 *
 */
public interface CheckOutService {
	PurchaseResponse placeOrder(Purchase purchase);

}
