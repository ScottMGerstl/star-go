import { Component, Input } from '@angular/core';

@Component({
    selector: 'dice, [dice]',
    moduleId: module.id,
    templateUrl: './die.component.html',
    styleUrls: ['./die.component.css']
})
export class DieComponent {
    @Input() private type: DieType;
}

export type DieType = 'ability' | 'proficiency' | 'difficulty' | 'challenge' | 'boost' | 'setback' | 'force';