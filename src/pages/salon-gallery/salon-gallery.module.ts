import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonGalleryPage } from './salon-gallery';

@NgModule({
  declarations: [
    SalonGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonGalleryPage),
  ],
  exports: [
    SalonGalleryPage
  ]
})
export class SalonGalleryPageModule {}
