import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonPaymentPage } from './salon-payment';

@NgModule({
  declarations: [
    SalonPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonPaymentPage),
  ],
  exports: [
    SalonPaymentPage
  ]
})
export class SalonPaymentPageModule {}
