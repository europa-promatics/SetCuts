import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonBarberProfilePage } from './salon-barber-profile';

@NgModule({
  declarations: [
    SalonBarberProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonBarberProfilePage),
  ],
  exports: [
    SalonBarberProfilePage
  ]
})
export class SalonBarberProfilePageModule {}
