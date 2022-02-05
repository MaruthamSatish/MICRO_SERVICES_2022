package com.easytobuy.service;

import java.util.Date;
import java.util.Set;
import java.util.UUID;
import javax.transaction.Transactional;
import com.easytobuy.entity.Purchase;
import com.easytobuy.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.easytobuy.entity.Customer;
import com.easytobuy.entity.Order;
import com.easytobuy.entity.OrderItem;
import com.easytobuy.entity.PurchaseResponse;


@Service
public class CheckOutServiceImpl implements CheckOutService {

	private CustomerRepository customerRepository;

	@Autowired
	public CheckOutServiceImpl(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	@Override
	@Transactional
	public PurchaseResponse placeOrder(Purchase purchase) {
		Order order = purchase.getOrder();
		String orderTrackingId = generateTrackingId();
		order.setOrderTrackingId(orderTrackingId);
		Set<OrderItem> orderItems = purchase.getOrderItems();
		orderItems.forEach(item -> order.add(item));
		order.setBillingAddress(purchase.getBillingAddress());
		order.setShippingAddress(purchase.getShipingAddress());
		Customer customer = purchase.getCustomer();
		customer.add(order);
		customerRepository.save(customer);
		return PurchaseResponse
				.builder()
						.status(purchase.getOrder().getStatus())
								.orderDate(new Date())
										.quantity(purchase.getOrder().getQuantity())
														.totalPrice(purchase.getOrder().getTotalPrice()).build();

	}

	public String generateTrackingId() {
		return UUID.randomUUID().toString();
	}
}
