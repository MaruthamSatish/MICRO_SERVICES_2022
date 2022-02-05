
/**
 * 
 */
package com.easytobuy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author SatishReddy
 *
 */
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4201")
public class ProductRestController {

	@Autowired
	private ProductRepository productRepository;

   @GetMapping
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> getAllProducts = productRepository.findAll().stream().collect(Collectors.toList());
		return new ResponseEntity<List<Product>>(getAllProducts, HttpStatus.OK);

	}

	@CrossOrigin(origins = "http://localhost:4201")
	@GetMapping("/category/{categoryId}")
    public List<Product> getByCategoryId(@PathVariable("categoryId") String categoryId) {
		List<Product> product = productRepository.findByCategoryId(categoryId);
		return product;
	}
	@PostMapping
    public ResponseEntity<Product> saveProduct(@RequestBody Product products) {
           productRepository.save(products);
           return new ResponseEntity<Product>(products, HttpStatus.CREATED);
    }

	/*@PostMapping
	public ResponseEntity<Product> saveProduct(@RequestBody Product products) {
		try {
			Optional<Coupon> getCoupnDetails = commonService.getCoupnDetails(products.getCouponCode());
			Optional<Category> getCategoryDetail = commonService.getCategoryDetails(products.getCategoryId());
			if (getCoupnDetails.isPresent() && getCategoryDetail.isPresent()) {
				products.setProductPrice(products.getProductPrice().subtract(getCoupnDetails.get().getCouponPrice()));
				products.setCategoryId(getCategoryDetail.get().getCategoryId().toString());
				productRepository.save(products);
			}
			return new ResponseEntity<Product>(products, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(new Product(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
*/
	public ResponseEntity<Product> couponProxy(@RequestBody Product products) {
		try {
			return new ResponseEntity<Product>(new Product(), HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<Product>(new Product(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{productId}")
	public HttpStatus deleteProduct(@PathVariable("productId") String productId) {
		Optional<Product> Product = productRepository.findById(productId);
		if (Product.isPresent()) {
			productRepository.deleteById(productId);
			return HttpStatus.NO_CONTENT;
		} else {
			return HttpStatus.NOT_FOUND;
		}
	}

	@GetMapping("/{productId}")
	public List<Product> getByProductId(@PathVariable("productId") String productId) {
		List<Product> product = productRepository.findByProductId(productId);
		return product;
	}

	

}
