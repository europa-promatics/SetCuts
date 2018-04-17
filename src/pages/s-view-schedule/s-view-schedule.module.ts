import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SViewSchedulePage } from './s-view-schedule';

@NgModule({
  declarations: [
    SViewSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(SViewSchedulePage),
  ],
  exports: [
    SViewSchedulePage
  ]
})
export class SViewSchedulePageModule {}
