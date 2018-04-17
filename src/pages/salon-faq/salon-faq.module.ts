import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonFaqPage } from './salon-faq';

@NgModule({
  declarations: [
    SalonFaqPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonFaqPage),
  ],
  exports: [
    SalonFaqPage
  ]
})
export class SalonFaqPageModule {}
