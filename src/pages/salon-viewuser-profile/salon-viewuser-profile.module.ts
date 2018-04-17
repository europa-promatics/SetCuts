import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonViewuserProfilePage } from './salon-viewuser-profile';

@NgModule({
  declarations: [
    SalonViewuserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonViewuserProfilePage),
  ],
  exports: [
    SalonViewuserProfilePage
  ]
})
export class SalonViewuserProfilePageModule {}
