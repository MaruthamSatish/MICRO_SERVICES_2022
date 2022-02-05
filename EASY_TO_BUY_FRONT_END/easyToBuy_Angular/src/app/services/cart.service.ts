import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Category} from '../entity/category';
import {CartItem} from '../entity/cart-item';

@Injectable({providedIn: 'root'})
export class CartService {
    cartItems : CartItem[] = [];
    totalPrice : BehaviorSubject < number > = new BehaviorSubject < number > (0);
    totalQuantity : BehaviorSubject < number > = new BehaviorSubject < number > (0);
    constructor() {}
    addToCart(theCartItem : CartItem) {
        let alreadyExistsInCart : boolean = false;
        let existingCartItem : CartItem = undefined;
        if (this.cartItems.length > 0) {

            existingCartItem = this
                .cartItems
                .find(tempCartItem => tempCartItem.productId === theCartItem.productId);
                 alreadyExistsInCart = (existingCartItem != undefined);
        }
        if (alreadyExistsInCart) {
            existingCartItem.quantity++;
        } else {
            this
                .cartItems
                .push(theCartItem);

        }

        this.computeCartTotals();

    }

    computeCartTotals() {

        let totalPriceValue : number = 0;
        let totalQuantityValue : number = 0;
        for (let currentCartItem of this.cartItems) {
            totalPriceValue += currentCartItem.quantity * currentCartItem.productPrice;
            totalQuantityValue += currentCartItem.quantity;
        }
        this
            .totalPrice
            .next(totalPriceValue);
        this
            .totalQuantity
            .next(totalQuantityValue);
        this.logCartData(totalPriceValue, totalQuantityValue);

    }
    logCartData(totalPriceValue : number, totalQuantityValue : number) {
        for (let tempCartItem of this.cartItems) {
            const subTotalPrice = tempCartItem.quantity * tempCartItem.productPrice;

        }

    }
    decrementQuantity(theCartItem : CartItem) {
        theCartItem.quantity--;
        if (theCartItem.quantity === 0) {
            this.removeCartItem(theCartItem);
        } else {
            this.computeCartTotals();
        }
    }
    removeCartItem(theCartItem) {
        //get Index of CartItems
        const itemIndex = this
            .cartItems
            .findIndex(tempCartItem => tempCartItem.productId === theCartItem.productId);
        if (itemIndex > -1) {
            this
                .cartItems
                .splice(itemIndex, 1);
            this.computeCartTotals();
        }
    }
}
