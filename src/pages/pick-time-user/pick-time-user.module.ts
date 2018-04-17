import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickTimeUserPage } from './pick-time-user';

@NgModule({
  declarations: [
    PickTimeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PickTimeUserPage),
  ],
  exports: [
    PickTimeUserPage
  ]
})
export class PickTimeUserPageModule {}
