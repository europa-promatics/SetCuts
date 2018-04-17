import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonRegisterationPage } from './salon-registeration';

@NgModule({
  declarations: [
    SalonRegisterationPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonRegisterationPage),
  ],
  exports: [
    SalonRegisterationPage
  ]
})
export class SalonRegisterationPageModule {}
