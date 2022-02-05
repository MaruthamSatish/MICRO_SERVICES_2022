/**
 * 
 */
package com.easytobuy.repository;
import com.easytobuy.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Satish Reddy
 *
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
