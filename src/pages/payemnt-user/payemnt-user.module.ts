import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayemntUserPage } from './payemnt-user';

@NgModule({
  declarations: [
    PayemntUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PayemntUserPage),
  ],
  exports: [
    PayemntUserPage
  ]
})
export class PayemntUserPageModule {}
