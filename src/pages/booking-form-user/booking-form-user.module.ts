import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingFormUserPage } from './booking-form-user';

@NgModule({
  declarations: [
    BookingFormUserPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingFormUserPage),
  ],
  exports: [
    BookingFormUserPage
  ]
})
export class BookingFormUserPageModule {}
