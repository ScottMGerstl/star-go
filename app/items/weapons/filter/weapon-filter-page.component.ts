import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { WeaponFilter } from './weapon-filter';
import { WeaponFilterService } from './weapon-filter.service';

import { Selection } from '../../../shared/models/selection';
import { StorageService, StorageServiceKeys } from '../../../shared/storage/storage.service';
import { ItemService } from '../../item.service';
import { WeaponFilterData } from './weapon-filter-data';

@Component({
    moduleId: module.id,
    selector: 'weapon-filter-page',
    templateUrl: 'weapon-filter-page.component.html',
    styleUrls: ['weapon-filter-page.component.css']
})
export class WeaponFilterComponent implements OnInit {

    private filter: WeaponFilter;

    private maxPrice: string;
    private skills: Array<Selection<string>>;
    private hardPoints: Array<Selection<number>>;
    private encumbrances: Array<Selection<number>>;
    private ranges: Array<Selection<string>>;

    constructor(private itemService: ItemService, private weaponFilterService: WeaponFilterService, private routerExtensions: RouterExtensions, private storage: StorageService) {
        this.filter = new WeaponFilter();
        this.skills = [];
        this.hardPoints = [];
        this.encumbrances = [];
        this.ranges = [];
    }

    public ngOnInit(): void {
        const filterData: WeaponFilterData = this.itemService.getWeaponFilterData();

        const filterInStorage = this.storage.getValue<WeaponFilter>(StorageServiceKeys.weaponFilter);

        if (filterInStorage != null) {
            this.filter = filterInStorage;
        }

        this.setupFilterModels(filterData, this.filter);
    }

    private onSingleSelectTapped(item: Selection<any>, collection: Array<Selection<any>>) {
        if (item.selected === true) {
            // deselect the tapped one
            item.selected = false;
        }
        else {
            // deselect all others and select only the one tapped
            collection.filter(i => i.selected === true).forEach(i => i.selected = false);
            item.selected = true;
        }
    }

    private onMultiSelectTapped(item: Selection<any>): void {
        // toggle on/off
        item.selected = !item.selected;
    }

    private onFilterFinishTapped(): void {
        this.filter.maxEncumbrance = this.getSingleSelectionValue<number>(this.encumbrances);
        this.filter.minHardPoints = this.getSingleSelectionValue<number>(this.hardPoints);
        this.filter.skills = this.getMultiSelectionValues<string>(this.skills);
        this.filter.ranges = this.getMultiSelectionValues<string>(this.ranges);

        if (!this.maxPrice || this.maxPrice.trim().length === 0 || parseInt(this.maxPrice.trim(), 10) <= 1) {
            this.filter.maxPrice = null;
        }
        else {
            this.filter.maxPrice = parseInt(this.maxPrice.trim(), 10);
        }

        // Set the filter to null if no filters were selected
        if (this.filter.maxEncumbrance === null && this.filter.minHardPoints === null && this.filter.maxPrice === null && this.filter.skills.length === 0 && this.filter.ranges.length === 0) {
            this.filter = null;
        }

        this.weaponFilterService.saveWeaponFilter(this.filter);

        this.routerExtensions.backToPreviousPage();
    }

    private setupFilterModels(filterData: WeaponFilterData, initFilter?: WeaponFilter): void {

        if (this.filter && (this.filter.maxPrice || this.filter.maxPrice === 0)) {
            this.maxPrice = this.filter.maxPrice.toString();
        }

        for (const value of filterData.skills) {
            this.skills.push({
                value,
                selected: (initFilter && initFilter.skills && initFilter.skills.indexOf(value) > -1)
            });
        }

        for (const value of filterData.encumbrances) {
            this.encumbrances.push({
                value,
                selected: (initFilter && initFilter.maxEncumbrance && initFilter.maxEncumbrance === value)
            });
        }

        for (const value of filterData.hardPoints) {
            this.hardPoints.push({
                value,
                selected: (initFilter && initFilter.minHardPoints && initFilter.minHardPoints === value)
            });
        }

        for (const value of filterData.ranges) {
            this.ranges.push({
                value,
                selected: (initFilter && initFilter.ranges && initFilter.ranges.indexOf(value) > -1)
            });
        }
    }

    /**
     * Gets the value of the first selected item in a Array<Selection<T> collection. If none are found null, is returned
     *
     * @private
     * @template T
     * @param {Array<Selection<T>>} collection The collection to find the first selected value from
     * @returns {T}
     * @memberof WeaponFilterPage
     */
    private getSingleSelectionValue<T>(collection: Array<Selection<T>>): T {
        const selection: Selection<T> = collection.find(i => i.selected === true);

        if (selection !== undefined) {
            return selection.value;
        }
        else {
            return null;
        }
    }

    /**
     * Gets the values of the Array<Selection<T> collection that are selected. If none are found an empty array is returned
     *
     * @private
     * @template T
     * @param {Array<Selection<T>>} collection the collection to get the values from
     * @returns {T[]}
     * @memberof WeaponFilterPage
     */
    private getMultiSelectionValues<T>(collection: Array<Selection<T>>): Array<T> {
        const result: Array<T> = [];

        collection.filter(i => i.selected === true).forEach(i => result.push(i.value));

        return result;
    }

    private onClearTapped(): void {
        this.clearAllFilters();
    }

    private clearAllFilters(): void {
        this.maxPrice = null;
        this.skills.forEach(s => s.selected = false);
        this.ranges.forEach(s => s.selected = false);
        this.encumbrances.forEach(s => s.selected = false);
        this.hardPoints.forEach(s => s.selected = false);
    }
}