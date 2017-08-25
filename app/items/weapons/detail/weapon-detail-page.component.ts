import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../item.service';
import { Weapon } from '../weapon';

@Component({
    selector: 'weapon-detail-page',
    moduleId: module.id,
    templateUrl: './weapon-detail-page.component.html',
    styleUrls: ['./weapon-detail-page.component.css']
})
export class WeaponDetailComponent implements OnInit {
    private item: Weapon;
    private owned: boolean = false;

    constructor(private _route: ActivatedRoute, private _itemsService: ItemService) { }

    public ngOnInit(): void {
        // const ownedString = this._route.snapshot.queryParams['owned'];
        // this.owned = ownedString === 'true' ? true : false;

        const itemId = this._route.snapshot.params.id;
        console.log(itemId);
        this.item = this._itemsService.getWeaponById(itemId);
    }

    private onAddTapped(): void {
        alert('added to inventory');
    }
}