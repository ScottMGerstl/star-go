import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { InventoryComponent } from './inventory/inventory.component';
import { ItemsComponent } from './items.component';
import { ShopComponent } from './shop/shop.component';
import { WeaponDetailComponent } from './weapons/detail/weapon-detail-page.component';
import { WeaponFilterComponent } from './weapons/filter/weapon-filter-page.component';
import { WeaponListComponent } from './weapons/list/weapon-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: ItemsComponent,
        children: [
            { path: 'inventory', component: InventoryComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'weapons', component: WeaponListComponent },
            { path: 'weapon-filter', component: WeaponFilterComponent },
            { path: 'weapon-detail/:id', component: WeaponDetailComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ItemsRoutingModule { }
