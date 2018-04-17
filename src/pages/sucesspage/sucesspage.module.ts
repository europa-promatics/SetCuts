import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SucesspagePage } from './sucesspage';

@NgModule({
  declarations: [
    SucesspagePage,
  ],
  imports: [
    IonicPageModule.forChild(SucesspagePage),
  ],
  exports: [
    SucesspagePage
  ]
})
export class SucesspagePageModule {}
