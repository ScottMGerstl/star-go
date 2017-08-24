import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

import { InventoryComponent } from './inventory/inventory.component';
import { ItemsComponent } from './items.component';
import { ShopComponent } from './shop/shop.component';
import { WeaponDetailComponent } from './weapons/detail/weapon-detail-page.component';
import { WeaponFilterComponent } from './weapons/filter/weapon-filter-page.component';
import { WeaponListComponent } from './weapons/list/weapon-list-page.component';

import { ItemService } from './item.service';
import { WeaponFilterService } from './weapons/filter/weapon-filter.service';

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
        ShopComponent,
        WeaponDetailComponent,
        WeaponFilterComponent,
        WeaponListComponent
    ],
    providers: [
        ItemService,
        WeaponFilterService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule { }
