import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberReviewRatingPage } from './barber-review-rating';

@NgModule({
  declarations: [
    BarberReviewRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberReviewRatingPage),
  ],
  exports: [
    BarberReviewRatingPage
  ]
})
export class BarberReviewRatingPageModule {}
