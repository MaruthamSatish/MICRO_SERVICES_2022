/**
 * 
 */
package com.easytobuy.entity;

import java.util.Set;
import lombok.Data;

/**
 * @author Satish Reddy
 *
 */
@Data
public class Purchase {
	
	private Customer customer;
	private Address shipingAddress;
	private Address billingAddress;
	private Order order;
	private Set<OrderItem> orderItems;

}
