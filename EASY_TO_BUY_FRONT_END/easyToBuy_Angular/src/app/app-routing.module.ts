import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import {CartDetailsComponent} from './components/cart-details/cart-details.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {MainComponent} from './components/main/main.component';
import { OrdersComponent } from './components/orders/orders.component';
import {ProductGridComponent} from './components/product-grid/product-grid.component';
import {ProductComponent} from './components/product/product.component';
import {UserSignupComponent} from './components/user-signup/user-signup.component';

const routes : Routes = [
    {
        path: 'Men/:categoryId',
        component: ProductGridComponent
    }, {
        path: 'Women/:categoryId',
        component: ProductGridComponent
    }, {
        path: 'products/:productId',
        component: ProductComponent
    }, {
        path: 'checkout',
        component: CheckoutComponent
    }, {
        path: 'Kids/:categoryId',
        component: ProductGridComponent
    }, {
        path: 'cart-details',
        component: CartDetailsComponent
    }, {
        path: 'user-signup',
        component: UserSignupComponent
    }, {
        path: 'app-account-info',
        component: AccountInfoComponent
    }, 
    
    {
        path: 'app-orders',
        component: OrdersComponent
    },
    {
        path: 'app-addresses',
        component: AddressesComponent
    }, 
    {
        path: 'mobile/:categoryId',
        component: ProductGridComponent
    }, {
        path: 'home',
        component: MainComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}