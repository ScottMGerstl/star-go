import { Component, Input } from '@angular/core';

@Component({
    selector: 'attribute-bubble',
    moduleId: module.id,
    templateUrl: './attribute-bubble.component.html',
    styleUrls: ['./attribute-bubble.component.css']
})
export class AttributeBubbleComponent{
    @Input() private value: string | number;
    @Input() private type: BubbleType;
}

type BubbleType = 'damage' | 'critical' | 'range';