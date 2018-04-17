import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewPurchasePage } from './review-purchase';

@NgModule({
  declarations: [
    ReviewPurchasePage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewPurchasePage),
  ],
  exports: [
    ReviewPurchasePage
  ]
})
export class ReviewPurchasePageModule {}
