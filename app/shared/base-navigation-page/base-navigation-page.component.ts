import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-telerik-ui/sidedrawer/angular';

@Component({
    selector: 'base-navigation-page',
    moduleId: module.id,
    styleUrls: ['./base-navigation-page.component.css'],
    templateUrl: './base-navigation-page.component.html'
})
export class BaseNavigationComponent implements OnInit {

    @Input() private actionBarTitle: string;
    @Input() private selectedPageName: string;

    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the 'onDrawerButtonTap' function below to manipulate the drawer.
    *************************************************************/
    @ViewChild('drawer') private drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    public ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    public onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
}
