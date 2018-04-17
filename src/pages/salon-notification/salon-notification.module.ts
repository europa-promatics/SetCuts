import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonNotificationPage } from './salon-notification';

@NgModule({
  declarations: [
    SalonNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonNotificationPage),
  ],
  exports: [
    SalonNotificationPage
  ]
})
export class SalonNotificationPageModule {}
