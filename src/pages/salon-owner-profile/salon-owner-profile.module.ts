import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonOwnerProfilePage } from './salon-owner-profile';

@NgModule({
  declarations: [
    SalonOwnerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonOwnerProfilePage),
  ],
  exports: [
    SalonOwnerProfilePage
  ]
})
export class SalonOwnerProfilePageModule {}
