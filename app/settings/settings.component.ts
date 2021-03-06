import { Component, OnInit } from '@angular/core';

import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'Settings',
    moduleId: module.id,
    templateUrl: './settings.component.html'
})
export class SettingsComponent {
    constructor(private fonticon: TNSFontIconService) { }
}
