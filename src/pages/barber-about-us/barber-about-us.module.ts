import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberAboutUsPage } from './barber-about-us';

@NgModule({
  declarations: [
    BarberAboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberAboutUsPage),
  ],
  exports: [
    BarberAboutUsPage
  ]
})
export class BarberAboutUsPageModule {}
