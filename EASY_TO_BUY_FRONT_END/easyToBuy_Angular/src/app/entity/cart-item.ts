import { Product } from "./product";

export class CartItem {
    productName: string;
    productDescription: string;
    productPrice: number;
    productImage: string;
    quantity: number;
    productId: string;
    constructor(product: Product) {
        this.productName = product.productName;
        this.productDescription = product.productDescription;
        this.productImage = product.productImage;
        this.productPrice = product.productPrice;
        this.quantity = 1;
        this.productId= product.productId;
    
    }
}
