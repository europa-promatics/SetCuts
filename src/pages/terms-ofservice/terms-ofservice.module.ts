import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsOfservicePage } from './terms-ofservice';

@NgModule({
  declarations: [
    TermsOfservicePage,
  ],
  imports: [
    IonicPageModule.forChild(TermsOfservicePage),
  ],
  exports: [
    TermsOfservicePage
  ]
})
export class TermsOfservicePageModule {}
