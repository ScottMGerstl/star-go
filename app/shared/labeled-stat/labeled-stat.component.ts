import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'labeled-stat',
    templateUrl: 'labeled-stat.component.html',
    styleUrls: ['labeled-stat.component.css']
})
export class LabeledStatComponent implements OnInit {

    @Input() private label: string;
    @Input() private stat: string;

    @Input() private col: number;
    @Input() private row: number;
    @Input() private colSpan: number;

    @Input() private textWrap: boolean;

    constructor() { }

    public ngOnInit(): void {
        this.col = this.col || 0;
        this.row = this.row || 0;
        this.colSpan = this.colSpan || 1;
    }
}