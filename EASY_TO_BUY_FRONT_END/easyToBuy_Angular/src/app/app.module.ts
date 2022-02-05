import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, WavesModule, DropdownModule,ButtonsModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductGridComponent,
    ProductComponent,
    MainComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    UserSignupComponent,
    AccountInfoComponent,
    OrdersComponent,
    AddressesComponent,
    OrderTrackingComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WavesModule, 
    DropdownModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
