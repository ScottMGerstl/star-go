import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'labeled-input',
    templateUrl: 'labeled-input.component.html',
    styleUrls: ['labeled-input.component.css']
})
export class LabeledInputComponent implements OnInit {

    @Input() private label: string;

    constructor() { }

    public ngOnInit(): void {
    }
}