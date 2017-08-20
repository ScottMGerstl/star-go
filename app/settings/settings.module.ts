import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        NativeScriptModule,
        SettingsRoutingModule,
        SharedModule,
        TNSFontIconModule.forRoot({
            fa: 'assets/font-awesome.min.css'
        })
    ],
    declarations: [
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
