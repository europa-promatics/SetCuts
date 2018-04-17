import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressPopupPage } from './address-popup';

@NgModule({
  declarations: [
    AddressPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressPopupPage),
  ],
  exports: [
    AddressPopupPage
  ]

})
export class AddressPopupPageModule {}
