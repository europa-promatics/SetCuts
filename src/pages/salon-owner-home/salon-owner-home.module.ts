import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonOwnerHomePage } from './salon-owner-home';

@NgModule({
  declarations: [
    SalonOwnerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonOwnerHomePage),
  ],
  exports: [
    SalonOwnerHomePage
  ]
})
export class SalonOwnerHomePageModule {}
