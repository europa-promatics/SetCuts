import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Showpath } from './showpath';

@NgModule({
  declarations: [
    Showpath,
  ],
  imports: [
    IonicPageModule.forChild(Showpath),
  ],
  exports: [
    Showpath
  ]
})
export class ShowpathModule {}
