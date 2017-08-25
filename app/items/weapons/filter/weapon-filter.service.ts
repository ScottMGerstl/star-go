import { EventEmitter, Injectable } from '@angular/core';
import { StorageService, StorageServiceKeys } from '../../../shared/storage/storage.service';
import { WeaponFilter } from './weapon-filter';

@Injectable()
export class WeaponFilterService {
    public weaponFilterSaved: EventEmitter<WeaponFilter> = new EventEmitter<WeaponFilter>();

    constructor(private storage: StorageService) { }

    public saveWeaponFilter(filter: WeaponFilter): void {
        if (filter) {
            this.storage.setValue(StorageServiceKeys.weaponFilter, filter);
        }
        else {
            this.storage.removeValue(StorageServiceKeys.weaponFilter);
        }

        this.weaponFilterSaved.emit(filter);
    }
}