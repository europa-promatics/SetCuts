import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberSchedulePage } from './barber-schedule';

@NgModule({
  declarations: [
    BarberSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(BarberSchedulePage),
  ],
  exports: [
    BarberSchedulePage
  ]
})
export class BarberSchedulePageModule {}
