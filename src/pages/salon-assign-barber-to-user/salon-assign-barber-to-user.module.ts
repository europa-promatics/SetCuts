import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonAssignBarberToUserPage } from './salon-assign-barber-to-user';

@NgModule({
  declarations: [
    SalonAssignBarberToUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonAssignBarberToUserPage),
  ],
  exports: [
    SalonAssignBarberToUserPage
  ]
})
export class SalonAssignBarberToUserPageModule {}
