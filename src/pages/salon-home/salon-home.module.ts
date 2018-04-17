import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonHome } from './salon-home';

@NgModule({
  declarations: [
    SalonHome,
  ],
  imports: [
    IonicPageModule.forChild(SalonHome),
  ],
  exports: [
    SalonHome
  ]
})
export class SalonHomeModule {}
