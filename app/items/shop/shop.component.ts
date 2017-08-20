import { Component, OnInit } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import { ShopCategory } from './shop-category';

@Component({
    selector: 'Shop',
    moduleId: module.id,
    styleUrls: ['./shop.component.css'],
    templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
    private shopCategories: Array<ShopCategory>;

    constructor(private fonticon: TNSFontIconService) {
        this.shopCategories = [];
    }

    public ngOnInit(): void {
        this.shopCategories = [{
            title: 'Weapons',
            imageUrl: 'https://maxcdn.icons8.com/Share/icon/ios7/Cinema//lightsaber1600.png',
            route: 'weapons'
        }, {
            title: 'Armor',
            imageUrl: 'https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-helmet-spartan-512.png',
            route: '/items/weapons'
        }, {
            title: 'Vehicles',
            imageUrl: 'https://cdn0.iconfinder.com/data/icons/star-wars/512/falcon-512.png',
            route: 'items/weapons'
        }, {
            title: 'Armor',
            imageUrl: 'https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-helmet-spartan-512.png',
            route: '/items/weapons'
        }, {
            title: 'Vehicles',
            imageUrl: 'https://cdn0.iconfinder.com/data/icons/star-wars/512/falcon-512.png',
            route: 'items/weapons'
        }];
    }

    private getRows(): string {
        let result: string = '';

        const rows: number = Math.ceil(this.shopCategories.length / 2);

        for (let i = 0; i < rows; i++) {
            if (result.length > 0) {
                result += ',';
            }

            result += 'auto';
        }

        return result;
    }

    private getRowForIndex(i: number): number {
        return Math.floor(i / 2);
    }

    private getColumnForIndex(i: number): number {
        return Math.floor(i % 2);
    }
}
