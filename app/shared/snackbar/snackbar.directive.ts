import { Directive, ElementRef } from '@angular/core';
import { screen, ScreenMetrics } from 'platform';

const screenScale: number = screen.mainScreen.scale;
const offScreenMargin: number = screen.mainScreen.heightDIPs * -1;

@Directive({
    selector: '[snackbar]'
})
export class SnackbarDirective {

    private element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
        this.element.nativeElement.marginBottom = offScreenMargin;
    }

    public show(): void {
        if (this.element.nativeElement.marginBottom === offScreenMargin) {
            this.element.nativeElement.marginBottom = this.getTranslateYHeight() * -1;
        }

        this.element.nativeElement.animate({
            translate: { x: 0, y: this.getTranslateYHeight() * -1 },
            duration: 750
        });
    }

    public dismiss(onDismissComplete: () => void): void {
        this.element.nativeElement.animate({
            translate: { x: 0, y: this.getTranslateYHeight() },
            duration: 750
        })
        .then(() => {
            if (onDismissComplete) {
                onDismissComplete();
            }
        });
    }

    private getTranslateYHeight(): number {
        return this.element.nativeElement.getMeasuredHeight() / screenScale;
    }
}