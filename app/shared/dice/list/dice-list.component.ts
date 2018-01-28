import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DiceListConfiguration } from './dice-list-config';

@Component({
    selector: 'dice-list,  [dice-list]',
    moduleId: module.id,
    templateUrl: './dice-list.component.html',
    styleUrls: ['./dice-list.component.css']
})
export class DiceListComponent implements OnChanges, OnInit {
    @Input() private config: DiceListConfiguration;
    private diceDisplayList: Array<string>;

    constructor() {
        this.diceDisplayList = [];
    }

    public ngOnInit(): void {
        this.buildDisplayList();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.buildDisplayList();
    }

    private buildDisplayList(): void {
        const result: Array<string> = [];

        for (const key in this.config) {
            if (this.config[key] != null && this.config[key] > 0) {
                for (let i = 0; i < this.config[key]; i++) {
                    result.push(key);
                }
            }
        }

        this.diceDisplayList = result;
    }
}