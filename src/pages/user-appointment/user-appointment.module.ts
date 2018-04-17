import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAppointmentPage } from './user-appointment';

@NgModule({
  declarations: [
    UserAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAppointmentPage),
  ],
  exports: [
    UserAppointmentPage
  ]
})
export class UserAppointmentPageModule {}
