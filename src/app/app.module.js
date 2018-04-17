var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalonHome } from '../pages/salon-home/salon-home';
import { SalonOwnerHomePage } from '../pages/salon-owner-home/salon-owner-home';
import { LocationSelectPage } from '../pages/location-select/location-select';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BarberServicePage } from '../pages/barber-service/barber-service';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { BarberHomePage } from '../pages/barber-home/barber-home';
import { ServicesProvider } from '../providers/services/services';
import { Facebook } from '@ionic-native/facebook';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SViewSchedulePage } from '../pages/s-view-schedule/s-view-schedule';
import { NewPage } from '../pages/new/new';
import { SalonPaymentHistoryPage } from '../pages/salon-payment-history/salon-payment-history';
import { CustomerPaymentHistoryPage } from '../pages/customer-payment-history/customer-payment-history';
import { SalonEarningsPage } from '../pages/salon-earnings/salon-earnings';
import { Stripe } from '@ionic-native/stripe';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                SalonHome,
                SalonOwnerHomePage,
                LocationSelectPage,
                BarberServicePage,
                BarberHomePage,
                SViewSchedulePage,
                NewPage,
                CustomerPaymentHistoryPage,
                SalonPaymentHistoryPage,
                SalonEarningsPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                SalonHome,
                SalonOwnerHomePage,
                LocationSelectPage,
                BarberServicePage,
                BarberHomePage,
                SViewSchedulePage,
                NewPage,
                SalonPaymentHistoryPage,
                CustomerPaymentHistoryPage,
                SalonEarningsPage
            ],
            providers: [SocialSharing,
                Camera,
                File,
                Diagnostic,
                Transfer,
                FilePath,
                StatusBar,
                SplashScreen,
                TransferObject,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                Network,
                Geolocation,
                Facebook,
                Stripe,
                ServicesProvider,
                CallNumber,
                InAppBrowser
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map