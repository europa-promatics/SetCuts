import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationUser } from './registration-user';

@NgModule({
  declarations: [
    RegistrationUser,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationUser),
  ],
  exports: [
    RegistrationUser
  ]
})
export class RegistrationUserModule {}
