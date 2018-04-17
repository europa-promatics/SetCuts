import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentSucessPage } from './payment-sucess';

@NgModule({
  declarations: [
    PaymentSucessPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentSucessPage),
  ],
  exports: [
    PaymentSucessPage
  ]
})
export class PaymentSucessPageModule {}
