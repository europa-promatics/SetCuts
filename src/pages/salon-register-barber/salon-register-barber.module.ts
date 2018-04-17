import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonRegisterBarberPage } from './salon-register-barber';

@NgModule({
  declarations: [
    SalonRegisterBarberPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonRegisterBarberPage),
  ],
  exports: [
    SalonRegisterBarberPage
  ]
})
export class SalonRegisterBarberPageModule {}
