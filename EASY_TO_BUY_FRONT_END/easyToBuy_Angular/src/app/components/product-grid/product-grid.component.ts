import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/entity/product';
import {ProductService} from 'src/app/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartItem} from 'src/app/entity/cart-item';
import {CartService} from 'src/app/services/cart.service';
@Component({selector: 'app-product-grid', templateUrl: './product-grid.component.html', styleUrls: ['./product-grid.component.css']})
export class ProductGridComponent implements OnInit {
    productsByCategoryId : Product[];
    theProduct : Product;
    productsByCategoryId2 : Product[] = [];
    productsByCategoryId1 : Product[] = [
        {
            "productId": "1",
            "productName": "T-Shirt",
            "productDescription": "Roadster Red",
            "productPrice": 3000,
            "categoryId": 1,
            "productImage": ""
        }, {
            "productId": "2",
            "productName": "T-Shirt-Men",
            "productDescription": "Roadster White",
            "productPrice": 5000,
            "categoryId": 1,
            "productImage": ""
        }, {
            "productId": "3",
            "productName": "Saree",
            "productDescription": "Saree",
            "productPrice": 2000,
            "categoryId": 2,
            "productImage": ""
        }, {
            "productId": "4",
            "productName": "Panjabi",
            "productDescription": "Panjabi",
            "productPrice": 3500,
            "categoryId": 2,
            "productImage": ""
        }
    ];
    product : Product;
    constructor(private productService : ProductService, private activatedRoutes : ActivatedRoute, private route : Router, private cartService : CartService) {}

    ngOnInit() : void {
        this.productsByCategory(this.activatedRoutes.snapshot.paramMap.get('categoryId'));
    }
    productsByCategory(categoryId) : void {
        console.log("categoryId" + categoryId);
        this
            .productService
            .getProductsByCategoryId(categoryId)
            .subscribe(data => {
                this.productsByCategoryId = data;

            }, error => {
                console.log(error);
            });
    }
    addToCart(theProduct : Product) {
        const theCartItem = new CartItem(theProduct);

        this
            .cartService
            .addToCart(theCartItem);
    }
    productsByCategory1(categoryId : any) {
        this
            .productsByCategoryId1
            .forEach((tempCartItem, index) => {
                if (tempCartItem => tempCartItem.categoryId === categoryId) {
                    this
                        .productsByCategoryId1
                        .splice(index, categoryId);
                }
                this.productsByCategoryId1.reduce;
            });

    }
}