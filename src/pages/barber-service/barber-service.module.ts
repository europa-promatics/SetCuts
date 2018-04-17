import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberServicePage } from './barber-service';

@NgModule({
  declarations: [
    BarberServicePage,
  ],
  imports: [
    IonicPageModule.forChild(BarberServicePage),
  ],
  exports: [
    BarberServicePage
  ]
})
export class BarberServicePageModule {}
