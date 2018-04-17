import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Findsalonmap } from './findsalonmap';

@NgModule({
  declarations: [
    Findsalonmap,
  ],
  imports: [
    IonicPageModule.forChild(Findsalonmap),
  ],
  exports: [
    Findsalonmap
  ]
})
export class FindsalonmapModule {}
