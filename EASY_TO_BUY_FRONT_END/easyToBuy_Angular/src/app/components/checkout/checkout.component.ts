import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { Order } from 'src/app/entity/order';
import { OrderItem } from 'src/app/entity/order-item';
import { Purchase } from 'src/app/entity/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckOutService } from 'src/app/services/check-out.service';

@Component({selector: 'app-checkout', templateUrl: './checkout.component.html', styleUrls: ['./checkout.component.css']})
export class CheckoutComponent implements OnInit {
    checkoutFormGroup : FormGroup;
    constructor(private formBuilder : FormBuilder,private cartService: CartService,private checkOutService: CheckOutService,private router: Router) {}
    totalPrice: number = 0;
    totalQuantity: number = 0;
    ngOnInit() : void {
        this.reviewCartDetails();
        this.checkoutFormGroup = this
            .formBuilder
            .group({
                     customer: this
                    .formBuilder
                    .group({firstName: [''], lastName: [''], email: ['']}),
                shippingAddress: this
                    .formBuilder
                    .group({country: [''], state: [''], city: [''], street: [''], zipCode: ['']}),
                billingAddress: this
                    .formBuilder
                    .group({country: [''], state: [''], city: [''], street: [''], zipCode: ['']}),
                creditCard: this
                    .formBuilder
                    .group({
                        cardType: [''],
                        nameOnCard: [''],
                        cardNumber: [''],
                        securityCode: [''],
                        expirationMonth: [''],
                        expirationYear: ['']
                    })
            });
    }
    reviewCartDetails() {
        this.cartService.totalQuantity.subscribe(totalQuantity => this.totalQuantity = totalQuantity);
        this.cartService.totalPrice.subscribe(totalPrice => this.totalPrice = totalPrice);
    }

    //Getters for Customer:
    get firstName(){return this.checkoutFormGroup.get('customer.firstName');}
    get lastName(){return this.checkoutFormGroup.get('customer.lastName');}
    get eamil(){return this.checkoutFormGroup.get('customer.email');}
    //Getters for ShippingAddress:
    get shippingAddressStreet(){return this.checkoutFormGroup.get('shippingAddress.street');}
    get shippingAddressZipCode(){return this.checkoutFormGroup.get('shippingAddress.zipCode');}
    get shippingAddressCountry(){return this.checkoutFormGroup.get('shippingAddress.country');}
    get shippingAddressState(){return this.checkoutFormGroup.get('shippingAddress.state');}
    get shippingAddressCity(){return this.checkoutFormGroup.get('shippingAddress.city');}
    //Getters for BillingAddress:
    get billingAddressStreet(){return this.checkoutFormGroup.get('billingAddress.street');}
    get billingAddressZipCode(){return this.checkoutFormGroup.get('billingAddress.zipCode');}
    get billingAddressCountry(){return this.checkoutFormGroup.get('billingAddress.country');}
    get sbillingAddressState(){return this.checkoutFormGroup.get('billingAddress.state');}
    get billingAddressCity(){return this.checkoutFormGroup.get('billingAddress.city');}
    //Getters for creditCard
    get cardType(){return this.checkoutFormGroup.get('creditCard.cardType');}
    get nameOnCard(){return this.checkoutFormGroup.get('creditCard.nameOnCard');}
    get cardNumber(){return this.checkoutFormGroup.get('creditCard.cardNumber');}
    get securityCode(){return this.checkoutFormGroup.get('creditCard.securityCode');}
    get expirationMonth(){return this.checkoutFormGroup.get('creditCard.expirationMonth');}
    get expirationYear(){return this.checkoutFormGroup.get('creditCard.expirationYear');}
   copyShippingAddressToBillingAddress(event) {
        if (event.checked) {
            this
                .checkoutFormGroup
                .controls
                .billingAddress
                .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
        } else {
            this
                .checkoutFormGroup
                .controls
                .billingAddress
                .reset();
        }
    }
    onSubmit() {
        console.log(this.checkoutFormGroup.get('customer').value);
        let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;
    let purchase = new Purchase();
    // populate purchase - customer
    purchase.customer = this.checkoutFormGroup.controls['customer'].value;
    
    // populate purchase - shipping address
    purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
    

    // populate purchase - billing address
    purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
  
    // populate purchase - order and orderItems
    purchase.order = order;

    // get cart items
    


        const cartItems = this.cartService.cartItems;
       
        let orderItems:OrderItem[] = cartItems.map(tempCartItems =>new OrderItem(tempCartItems));
       
        purchase.order= order;
        purchase.orderItems = orderItems;
       
        this.checkOutService.placeOrder(purchase).subscribe({
              next: respose =>{
               console.log(respose.orderTrackingId) ;
               console.log(respose.orderDate) ;
               console.log(respose.status) ;
               console.log(respose.quantity) ;
               console.log(respose.totalPrice) ;
            
               this.router.navigate(['/app-orders'])
              },
              error: error =>{

              }
        });

    }
}
