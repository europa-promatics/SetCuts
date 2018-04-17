var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsOfservicePage } from './terms-ofservice';
var TermsOfservicePageModule = /** @class */ (function () {
    function TermsOfservicePageModule() {
    }
    TermsOfservicePageModule = __decorate([
        NgModule({
            declarations: [
                TermsOfservicePage,
            ],
            imports: [
                IonicPageModule.forChild(TermsOfservicePage),
            ],
            exports: [
                TermsOfservicePage
            ]
        })
    ], TermsOfservicePageModule);
    return TermsOfservicePageModule;
}());
export { TermsOfservicePageModule };
//# sourceMappingURL=terms-ofservice.module.js.map