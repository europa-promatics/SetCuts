import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Creataccount } from './creataccount';

@NgModule({
  declarations: [
    Creataccount,
  ],
  imports: [
    IonicPageModule.forChild(Creataccount),
  ],
  exports: [
    Creataccount
  ]
})
export class CreataccountModule {}
