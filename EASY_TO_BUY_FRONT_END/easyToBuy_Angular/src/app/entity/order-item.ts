import { CartItem } from './cart-item'

export class OrderItem {
    productImageUrl: String;
    unitPrice: number;
    quantity: number;
    product_id: String;
    constructor(cartItem: CartItem){
        this.productImageUrl = "Test Image";
        this.unitPrice = cartItem.productPrice;
        this.quantity =  cartItem.quantity;
        this.product_id = cartItem.productId;

    }
}
