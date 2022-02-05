/**
 * 
 */
package com.easytobuy.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

/**
 * @author Satish Reddy
 *
 */
@Data
@Builder
@Getter
@Setter
public class PurchaseResponse {
	
	private String orderTrackingId;
	private String productName;
	private String status;
	private Date orderDate;
	private BigDecimal totalPrice;
	private int quantity;


}
