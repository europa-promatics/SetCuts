import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonAvailabilityPage } from './salon-availability';

@NgModule({
  declarations: [
    SalonAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonAvailabilityPage),
  ],
  exports: [
    SalonAvailabilityPage
  ]
})
export class SalonAvailabilityPageModule {}
