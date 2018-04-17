import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonBarberListPage } from './salon-barber-list';

@NgModule({
  declarations: [
    SalonBarberListPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonBarberListPage),
  ],
  exports: [
    SalonBarberListPage
  ]
})
export class SalonBarberListPageModule {}
