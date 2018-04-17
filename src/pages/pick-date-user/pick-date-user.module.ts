import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickDateUserPage } from './pick-date-user';

@NgModule({
  declarations: [
    PickDateUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PickDateUserPage),
  ],
  exports: [
    PickDateUserPage
  ]
})
export class PickDateUserPageModule {}
