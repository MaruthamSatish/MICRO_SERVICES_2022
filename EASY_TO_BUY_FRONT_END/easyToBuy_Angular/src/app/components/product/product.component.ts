import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'src/app/entity/product';
import {ProductService} from 'src/app/services/product.service';
import {CartItem} from 'src/app/entity/cart-item';
import {CartService} from 'src/app/services/cart.service';

@Component({selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.css']})
export class ProductComponent implements OnInit {
    productsById : Product[];
    constructor(private productService : ProductService, private activateRoutes : ActivatedRoute, private cartService : CartService) {}

    ngOnInit() : void {
        this.getProductById(this.activateRoutes.snapshot.paramMap.get('productId'));
    }
    getProductById(productId) : void {
        this
            .productService
            .getProductById(productId)
            .subscribe(data => {
                this.productsById = data;

            }, error => {
                console.log(error);
            });
    }
    addToCart(theProduct : Product) {
        const theCartItem = new CartItem(theProduct);
        console.log("theCartItem" + theCartItem.productId);
        this
            .cartService
            .addToCart(theCartItem);
    }
}
