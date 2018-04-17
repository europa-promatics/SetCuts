import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserBarberListPage } from './user-barber-list';

@NgModule({
  declarations: [
    UserBarberListPage,
  ],
  imports: [
    IonicPageModule.forChild(UserBarberListPage),
  ],
  exports: [
    UserBarberListPage
  ]
})
export class UserBarberListPageModule {}
