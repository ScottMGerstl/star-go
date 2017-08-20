import { Component } from '@angular/core';

import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private fonticon: TNSFontIconService) { }
}
