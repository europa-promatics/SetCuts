import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberListSetSchedulePage } from './barber-list-set-schedule';

@NgModule({
  declarations: [
    BarberListSetSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(BarberListSetSchedulePage),
  ],
  exports: [
    BarberListSetSchedulePage
  ]
})
export class BarberListSetSchedulePageModule {}
