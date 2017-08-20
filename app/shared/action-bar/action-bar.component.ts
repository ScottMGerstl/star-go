import { Component, Input } from '@angular/core';

@Component({
    selector: 'action-bar',
    moduleId: module.id,
    templateUrl: './action-bar.component.html'
})
export class ActionBarComponent {
    @Input() private actionBarTitle: string;
}