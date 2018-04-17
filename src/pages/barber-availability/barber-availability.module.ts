import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberAvailabilityPage } from './barber-availability';

@NgModule({
  declarations: [
    BarberAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberAvailabilityPage),
  ],
  exports: [
    BarberAvailabilityPage
  ]
})
export class BarberAvailabilityPageModule {}
