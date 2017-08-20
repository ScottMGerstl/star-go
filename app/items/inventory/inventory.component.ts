import { Component } from '@angular/core';

import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'Inventory',
    moduleId: module.id,
    templateUrl: './inventory.component.html'
})
export class InventoryComponent {
    constructor(private fonticon: TNSFontIconService) { }
}