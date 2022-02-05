/**
 * 
 */
package com.easytobuy;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document(value = "Product")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Product {

	@Id
	private String productId;
    private String productName;
    private String productDescription;
    private BigDecimal productPrice;
    private String categoryId;
    private String couponCode;

}

