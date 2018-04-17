import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonPaymentHistoryPage } from './salon-payment-history';

@NgModule({
  declarations: [
    SalonPaymentHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonPaymentHistoryPage),
  ],
  exports: [
    SalonPaymentHistoryPage
  ]
})
export class SalonPaymentHistoryPageModule {}
