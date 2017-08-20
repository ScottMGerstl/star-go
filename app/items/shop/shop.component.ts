import { Component } from '@angular/core';

import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'Shop',
    moduleId: module.id,
    templateUrl: './shop.component.html'
})
export class ShopComponent{
    constructor(private fonticon: TNSFontIconService) { }
}
