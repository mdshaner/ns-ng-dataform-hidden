import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
