import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StripePaymentPage } from './stripe-payment';

@NgModule({
  declarations: [
    StripePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(StripePaymentPage),
  ],
  exports: [
    StripePaymentPage
  ]
})
export class StripePaymentPageModule {}
