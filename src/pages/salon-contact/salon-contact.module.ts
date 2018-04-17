import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonContactPage } from './salon-contact';

@NgModule({
  declarations: [
    SalonContactPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonContactPage),
  ],
  exports: [
    SalonContactPage
  ]
})
export class SalonContactPageModule {}
