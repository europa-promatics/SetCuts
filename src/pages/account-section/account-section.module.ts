import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSectionPage } from './account-section';

@NgModule({
  declarations: [
    AccountSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSectionPage),
  ],
  exports: [
    AccountSectionPage
  ]
})
export class AccountSectionPageModule {}
