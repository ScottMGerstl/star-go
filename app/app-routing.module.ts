import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '', redirectTo: '/items/weapon-detail/Holdout Blaster', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'character', loadChildren: './character/character.module#CharacterModule' },
    { path: 'items', loadChildren: './items/items.module#ItemsModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
