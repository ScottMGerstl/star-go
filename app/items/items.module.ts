import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

import { InventoryComponent } from './inventory/inventory.component';
import { ItemsComponent } from './items.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
    imports: [
        NativeScriptModule,
        ItemsRoutingModule,
        SharedModule,
        TNSFontIconModule.forRoot({
            fa: 'assets/font-awesome.min.css'
        })
    ],
    declarations: [
        InventoryComponent,
        ItemsComponent,
        ShopComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule { }
