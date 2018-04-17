import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserBarberProfilePage } from './user-barber-profile';

@NgModule({
  declarations: [
    UserBarberProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(UserBarberProfilePage),
  ],
  exports: [
    UserBarberProfilePage
  ]
})
export class UserBarberProfilePageModule {}
