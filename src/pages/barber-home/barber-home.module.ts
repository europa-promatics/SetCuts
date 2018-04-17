import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberHomePage } from './barber-home';

@NgModule({
  declarations: [
    BarberHomePage,
  ],
  imports: [
    IonicPageModule.forChild(BarberHomePage),
  ],
  exports: [
    BarberHomePage
  ]
})
export class BarberHomePageModule {}
