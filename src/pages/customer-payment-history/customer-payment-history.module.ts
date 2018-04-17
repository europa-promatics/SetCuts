import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPaymentHistoryPage } from './customer-payment-history';

@NgModule({
  declarations: [
    CustomerPaymentHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerPaymentHistoryPage),
  ],
  exports: [
    CustomerPaymentHistoryPage
  ]
})
export class CustomerPaymentHistoryPageModule {}
