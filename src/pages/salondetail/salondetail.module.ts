import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Salondetail } from './salondetail';

@NgModule({
  declarations: [
    Salondetail,
  ],
  imports: [
    IonicPageModule.forChild(Salondetail),
  ],
  exports: [
    Salondetail
  ]
})
export class SalondetailModule {}
