import { Weapon } from '../weapon';
import { WeaponFilter } from './weapon-filter';

import { FilterEngine, IFilterDisqualification } from '../../../shared/filter/filter-engine';

export class WeaponFilterEngine extends FilterEngine<Weapon, WeaponFilter> {

    constructor() {
        super();
    }

    protected setConditions(): void {
        this.failConditions = [
            this.doesEncumbranceFilterFail,
            this.doesHardPointsFilterFail,
            this.doesPriceFilterFail,
            this.doesRangesFilterFail,
            this.doesSkillsFilterFail
        ];
    }

    /**
     * runs a test against the price property. Returns true if it fails
     *
     * @private
     * @param {Weapon} item the object that contains the price property
     * @param {WeaponFilter} filter the filter that may contain the maxPrice
     * @returns {boolean}
     * @memberof WeaponFilterEngine
     */
    private doesPriceFilterFail(item: Weapon, filter: WeaponFilter): boolean {
        let workingPrice: string = (item.price || 0).toString();

        if (workingPrice.indexOf('R') > -1) {
            workingPrice = workingPrice.substr(1).trim();
        }

        return (filter.maxPrice !== null && filter.maxPrice !== undefined && filter.maxPrice > -1) && ((workingPrice || 0) > filter.maxPrice);
    }

    /**
     * runs a test against the encumbrance property
     *
     * @private
     * @param {Weapon} item the object that contains the encumbrance property
     * @param {WeaponFilter} filter the filter that may contain the maxEncumbrance
     * @returns {boolean}
     * @memberof WeaponFilterEngine
     */
    private doesEncumbranceFilterFail(item: Weapon, filter: WeaponFilter): boolean {
        return (filter.maxEncumbrance !== null && filter.maxEncumbrance !== undefined && filter.maxEncumbrance > -1) && ((item.encumbrance || 0) > filter.maxEncumbrance);
    }

    /**
     * runs a test against the hardPoints property
     *
     * @private
     * @param {Weapon} item the object that contains the hardPoints property
     * @param {WeaponFilter} filter the filter that may contain the minHardPoints
     * @returns {boolean}
     * @memberof WeaponFilterEngine
     */
    private doesHardPointsFilterFail(item: Weapon, filter: WeaponFilter): boolean {
        return filter.minHardPoints !== null && filter.minHardPoints !== undefined && filter.minHardPoints > -1 && (item.hardPoints || 0) < filter.minHardPoints;
    }

    /**
     * runs a test against the range property
     *
     * @private
     * @param {Weapon} item the object that contains the range property
     * @param {WeaponFilter} filter the filter that may contain the ranges
     * @returns {boolean}
     * @memberof WeaponFilterEngine
     */
    private doesRangesFilterFail(item: Weapon, filter: WeaponFilter): boolean {
        return filter.ranges && filter.ranges.length > 0 && filter.ranges.indexOf(item.range) === -1;
    }

    /**
     * runs a test against the skill property
     *
     * @private
     * @param {Weapon} item the object that contains the skill property
     * @param {WeaponFilter} filter the filter that may contain the skills
     * @returns {boolean}
     * @memberof WeaponFilterEngine
     */
    private doesSkillsFilterFail(item: Weapon, filter: WeaponFilter): boolean {
        return filter.skills && filter.skills.length > 0 && filter.skills.indexOf(item.skill) === -1;
    }
}