import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonAppointmentPage } from './salon-appointment';

@NgModule({
  declarations: [
    SalonAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonAppointmentPage),
  ],
  exports: [
    SalonAppointmentPage
  ]
})
export class SalonAppointmentPageModule {}
