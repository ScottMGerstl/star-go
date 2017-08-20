import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { InventoryComponent } from './inventory/inventory.component';
import { ItemsComponent } from './items.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
    {
        path: '',
        component: ItemsComponent,
        children: [
            { path: 'inventory', component: InventoryComponent },
            { path: 'shop', component: ShopComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ItemsRoutingModule { }
