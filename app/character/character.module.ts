import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterService } from './character.service';
import { CharacterDetailComponent } from './detail/character-page.component';

@NgModule({
    imports: [
        NativeScriptModule,
        CharacterRoutingModule,
        SharedModule,
        TNSFontIconModule.forRoot({
            fa: 'assets/font-awesome.min.css'
        })
    ],
    declarations: [
        CharacterDetailComponent
    ],
    providers: [
        CharacterService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CharacterModule { }