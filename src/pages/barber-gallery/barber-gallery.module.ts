import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberGalleryPage } from './barber-gallery';

@NgModule({
  declarations: [
    BarberGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberGalleryPage),
  ],
  exports: [
    BarberGalleryPage
  ]
})
export class BarberGalleryPageModule {}
