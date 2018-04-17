import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberAppointmentPage } from './barber-appointment';

@NgModule({
  declarations: [
    BarberAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberAppointmentPage),
  ],
  exports: [
    BarberAppointmentPage
  ]
})
export class BarberAppointmentPageModule {}
