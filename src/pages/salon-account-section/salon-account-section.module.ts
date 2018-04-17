import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonAccountSectionPage } from './salon-account-section';

@NgModule({
  declarations: [
    SalonAccountSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonAccountSectionPage),
  ],
  exports: [
    SalonAccountSectionPage
  ]
})
export class SalonAccountSectionPageModule {}
