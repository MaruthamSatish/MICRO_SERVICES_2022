/**
 * 
 */
package com.easytobuy.resource;

import com.easytobuy.entity.Purchase;
import com.easytobuy.service.CheckOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.easytobuy.entity.PurchaseResponse;


/**
 * @author Satish Reddy
 *
 */
@RestController
@RequestMapping("/api/checkout")
public class CheckOutResource {

	private CheckOutService checkOutService;

	@Autowired
	public CheckOutResource(CheckOutService checkOutService) {
		this.checkOutService = checkOutService;
	}

	@PostMapping("/purchase")
	@CrossOrigin(origins = "http://localhost:4201")
	public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {
		PurchaseResponse purchaseResponse = checkOutService.placeOrder(purchase);

		return purchaseResponse;
	}
}
