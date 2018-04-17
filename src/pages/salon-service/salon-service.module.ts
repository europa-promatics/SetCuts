import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonServicePage } from './salon-service';

@NgModule({
  declarations: [
    SalonServicePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonServicePage),
  ],
  exports: [
    SalonServicePage
  ]
})
export class SalonServicePageModule {}
