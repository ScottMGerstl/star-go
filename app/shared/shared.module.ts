import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { ActionBarComponent } from './action-bar/action-bar.component';
import { BaseNavigationComponent } from './base-navigation-page/base-navigation-page.component';
import { MyDrawerComponent } from './my-drawer/my-drawer.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        ActionBarComponent,
        BaseNavigationComponent,
        MyDrawerComponent
    ],
    exports: [
        ActionBarComponent,
        BaseNavigationComponent,
        MyDrawerComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
