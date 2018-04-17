import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouriteSalonPage } from './favourite-salon';

@NgModule({
  declarations: [
    FavouriteSalonPage,
  ],
  imports: [
    IonicPageModule.forChild(FavouriteSalonPage),
  ],
  exports: [
    FavouriteSalonPage
  ]
})
export class FavouriteSalonPageModule {}
