import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutusUser } from './aboutus-user';

@NgModule({
  declarations: [
    AboutusUser,
  ],
  imports: [
    IonicPageModule.forChild(AboutusUser),
  ],
  exports: [
    AboutusUser
  ]
})
export class AboutusUserModule {}
