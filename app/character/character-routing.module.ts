import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { CharacterDetailComponent } from './detail/character-page.component';

const routes: Routes = [
    { path: '', component: CharacterDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CharacterRoutingModule { }