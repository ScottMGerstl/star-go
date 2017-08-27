import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { ActionBarComponent } from './action-bar/action-bar.component';
import { AttributeBubbleComponent } from './attribute-bubble/attribute-bubble.component';
import { BaseNavigationComponent } from './base-navigation-page/base-navigation-page.component';
import { DieComponent } from './dice/die/die.component';
import { DiceListComponent } from './dice/list/dice-list.component';
import { LabeledInputComponent } from './labeled-input/labeled-input.component';
import { LabeledStatComponent } from './labeled-stat/labeled-stat.component';
import { MyDrawerComponent } from './my-drawer/my-drawer.component';
import { StorageService } from './storage/storage.service';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        ActionBarComponent,
        AttributeBubbleComponent,
        BaseNavigationComponent,
        DieComponent,
        DiceListComponent,
        LabeledInputComponent,
        LabeledStatComponent,
        MyDrawerComponent
    ],
    exports: [
        ActionBarComponent,
        AttributeBubbleComponent,
        BaseNavigationComponent,
        DieComponent,
        DiceListComponent,
        LabeledInputComponent,
        LabeledStatComponent,
        MyDrawerComponent,
        NativeScriptUISideDrawerModule
    ],
    providers: [
        StorageService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
