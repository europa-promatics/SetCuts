import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutWelcome } from './about-welcome';

@NgModule({
  declarations: [
    AboutWelcome,
  ],
  imports: [
    IonicPageModule.forChild(AboutWelcome),
  ],
  exports: [
    AboutWelcome
  ]
})
export class AboutWelcomeModule {}
