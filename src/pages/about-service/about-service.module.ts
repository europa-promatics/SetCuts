import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutService } from './about-service';

@NgModule({
  declarations: [
    AboutService,
  ],
  imports: [
    IonicPageModule.forChild(AboutService),
  ],
  exports: [
    AboutService
  ]
})
export class AboutServiceModule {}
