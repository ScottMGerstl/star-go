import { Component, Input } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: 'action-bar',
    moduleId: module.id,
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
    @Input() private actionBarTitle: string;

    constructor(private fonticon: TNSFontIconService) { }
}