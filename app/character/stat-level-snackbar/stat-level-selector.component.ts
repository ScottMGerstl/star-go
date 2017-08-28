import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { SnackbarDirective } from '../../shared/snackbar/snackbar.directive';

@Component({
    selector: 'stat-level-selector, [stat-level-selector]',
    moduleId: module.id,
    templateUrl: './stat-level-selector.component.html',
    styleUrls: ['./stat-level-selector.component.css']
})
export class StatLevelSelectorComponent {
    @Input() private title: string;
    @Input() private statRange: Array<number>;
    @Input() private selection: number;

    @Output() private selected: EventEmitter<number> = new EventEmitter<number>(false);
    @Output() private canceled: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @ViewChild(SnackbarDirective) private snackbar: SnackbarDirective;


    constructor() {
        this.statRange = [];
    }

    private get gridColumns(): string {
        let result: string = '';

        for (const i of this.statRange) {
            if (result.length > 0) {
                result += ',';
            }
            result += '*';
        }

        return result;
    }

    private onLayoutTapped(): void {
        // stop propogation
    }

    private onSelected(selection: number): void {
        this.selection = selection;
        this.selected.emit(this.selection);
    }

    private onCanceled(): void {
        this.canceled.emit(true);
    }
}