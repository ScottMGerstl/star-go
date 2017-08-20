import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { BaseNavigationComponent } from './base-components/base-navigation-page.component';
import { MyDrawerComponent } from './my-drawer/my-drawer.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        BaseNavigationComponent,
        MyDrawerComponent
    ],
    exports: [
        BaseNavigationComponent,
        MyDrawerComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
