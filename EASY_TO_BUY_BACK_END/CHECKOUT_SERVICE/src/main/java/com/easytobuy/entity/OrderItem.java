/**
 * 
 */
package com.easytobuy.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Satish Reddy
 *
 */
@Entity
@Table(name = "order_item")
@Getter
@Setter
public class OrderItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_item_id")
	private Long orderItemId;
	@Column(name = "product_img_url")
	private String productImageURL;
	@Column(name = "unit_price")
	private BigDecimal unitPrice;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "product_id")
	private String productId;
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;
	

}
