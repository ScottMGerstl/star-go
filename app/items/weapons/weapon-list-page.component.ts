import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ExtendedNavigationExtras, RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Subscription } from 'rxjs';
import { GestureEventData } from 'ui/gestures';
import { TextField } from 'ui/text-field';
import { BaseComponent } from '../../shared/base-component/base.component';

// import { StorageService, StorageServiceKeys } from '../../../shared/services/storage.service';
// import { WeaponFilter } from '../weapon-filter/weapon-filter';
// import { WeaponFilterService } from '../weapon-filter/weapon-filter.service';
// import { WeaponFilterRunner } from '../weapon-filter/weapon-filter-runner';
import { Weapon } from './weapon';

import { ItemService } from '../item.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'weapon-list-page',
    moduleId: module.id,
    templateUrl: './weapon-list-page.component.html'
})
export class WeaponListComponent extends BaseComponent implements OnInit, OnDestroy {
    @Output() private addItemTapped: EventEmitter<Weapon> = new EventEmitter<Weapon>(false);

    private weaponFilterSubscription: Subscription;
    // private filter: WeaponFilter;

    private allItems: Array<Weapon>;
    private displayItems: Array<Weapon>;

    @ViewChild('searchTextField') private searchTextField: ElementRef;

    private listItemLongPressed: boolean = false;

    constructor(private fonticon: TNSFontIconService, private _itemService: ItemService, private _router: RouterExtensions, private _zone: NgZone) { //, private weaponFilterService: WeaponFilterService, private storage: StorageService) {
        super();

        this.allItems = [];
        this.displayItems = [];
    }

    public ngOnInit(): void {
        // Clear the filter when the page is first presented
        // this.storage.removeValue(StorageServiceKeys.weaponFilter);

        this.allItems = this._itemService.getWeaponList();
        this.displayItems = this.allItems;

        // this.weaponFilterSubscription = this.weaponFilterService.weaponFilterSaved.subscribe((filter: WeaponFilter) => {
        //     this.filter = filter;
        //     this.handlePropertyFilter(filter);
        // });
    }

    public ngOnDestroy(): void {
        this.unsubscribe(this.weaponFilterSubscription);
    }

    private onClearSearchTapped(): void {
        const textField = <TextField>this.searchTextField.nativeElement;
        textField.text = '';
        textField.dismissSoftInput();
    }

    /**
     * the primary handler for when a new value is typed into the searchText field
     *
     * @private
     */
    private onSearchTextChanged(event: any): void {
        // Make sure it was text that changed
        if (event.propertyName === 'text') {
            this.filterList(event.value);
        }
    }

    /**
     * Filter the results
     *
     * @private
     */
    private filterList(filterValue: string): void {
        if (filterValue !== '' && filterValue !== undefined && filterValue !== null) {

            const filteredItems: Array<Weapon> = [];

            this.displayItems.forEach(i => {
                if (i.name.indexOf(filterValue) > -1) {
                    filteredItems.push(i);
                }
            });

            this.displayItems = filteredItems;
        }
        else {
            // if (this.filter) {
            //     this.handlePropertyFilter(this.filter);
            // }
            // else {
                this.displayItems = this.allItems;
            // }
        }
    }

    private onItemTapped(args): void {
        const selectedItem: Weapon = this.displayItems[args.index];

        if (this.listItemLongPressed === true) {
            // show option dialog
        }
        else {
            this._router.navigate(['item', selectedItem.name]);
        }

        this.listItemLongPressed = false;
    }

    private onItemLongPress(args: GestureEventData): void {
        this.listItemLongPressed = true;
    }

    private onFilterTapped(): void {
        const navigationDef: ExtendedNavigationExtras = {
            animated: true,
            transition: {
                name: 'slideTop'
            }
        };

        this._router.navigate(['weapon-filter'], navigationDef);
    }

    // private handlePropertyFilter(filter: WeaponFilter) {
    //     let filterEngine: WeaponFilterRunner = new WeaponFilterRunner();
    //     let filteredItems: Weapon[] = filterEngine.runFilter(filter, this.allItems);

    //     this.displayItems = filteredItems;
    // }
}