import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonEarningsPage } from './salon-earnings';

@NgModule({
  declarations: [
    SalonEarningsPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonEarningsPage),
  ],
  exports: [
    SalonEarningsPage
  ]
})
export class SalonEarningsPageModule {}
