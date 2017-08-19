import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
    {
        path: '',
        component: ShopComponent,
        children: [
            { path: 'shop', component: ShopComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ItemsRoutingModule { }
