import { Injectable } from '@angular/core';
import * as appSettings from 'application-settings';

export enum StorageServiceKeys {
    weaponFilter
}

@Injectable()
export class StorageService {

    public getValue<T>(key: StorageServiceKeys): T {
        const rawValue: string = appSettings.getString(this.withKeyName(key));

        if (rawValue === null || rawValue === undefined) {
            return null;
        }

        return <T>JSON.parse(rawValue);
    }

    public setValue<T>(key: StorageServiceKeys, value: T): void {
        if (value === null || value === undefined) {
            throw Error('Value cannot be null. If you wish to remove the value, use removeValue() instead');
        }

        const stringifiedValue: string = JSON.stringify(value);

        appSettings.setString(this.withKeyName(key), stringifiedValue);
    }

    public removeValue(key: StorageServiceKeys): void {
        appSettings.remove(this.withKeyName(key));
    }

    private withKeyName(key: StorageServiceKeys): string {
        return StorageServiceKeys[key];
    }
}