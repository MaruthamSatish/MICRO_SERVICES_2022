/**
 * 
 */
package com.easytobuy;

import java.util.Date;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "Category")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Category {
	@Id
	private String categoryId;

	private String categoryName;

	@CreatedDate
	private Date createdDate;

	private Date updatedDate;
	
}
