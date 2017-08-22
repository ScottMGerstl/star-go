export abstract class FilterEngine<ItemT, FilterT> {

    /**
     * the collection of functions to test the item against the filter data.
     *
     * @protected
     * @type {Array<IFilterDisqualification<ItemT, FilterT>>}
     * @memberof FilterEngine
     */
    protected failConditions: Array<IFilterDisqualification<ItemT, FilterT>>;

    constructor() {
        this.setConditions();
    }

    /**
     * Given a filter and a collection of weapons, it will filter down the original set to matach all criteria in a new array
     *
     * @param {FilterT} filter the filter to apply
     * @param {Array<ItemT>} collection the collection to apply the filter to
     * @returns {Array<ItemT>} the resulting filtered collection in a new array
     * @memberof FilterEngine
     */
    public runFilter(filter: FilterT, collection: Array<ItemT>): Array<ItemT> {
        let filteredItems: Array<ItemT> = [];

        if (filter) {
            for (const i of collection) {
                if (this.runFilterFailureTestConditions(i, filter) === true) {
                    filteredItems.push(i);
                }
            }
        }
        else {
            filteredItems = collection;
        }

        return filteredItems;
    }

    /**
     * A lifecycle method called in the constuctor for the implementor to set the list of failure conditions for the filter to run against
     *
     * @protected
     * @abstract
     * @memberof FilterEngine
     */
    protected abstract setConditions(): void;

    /**
     * Indicates whether or not an item passes the filter.
     *
     * @private
     * @param {ItemT} item the item to test against the filter
     * @param {FilterT} filter the filter data to apply to the item
     * @param {Array<IFilterDisqualification<ItemT, FilterT>>} failConditions the collection of functions to test the item against the filter data.
     * @returns {boolean}
     * @memberof FilterEngine
     */
    private runFilterFailureTestConditions(item: ItemT, filter: FilterT): boolean {
        let failCount: number = 0;

        for (const failCondition of this.failConditions) {
            if (failCondition(item, filter) === true) {
                failCount += 1;
            }
        }

        return failCount === 0;
    }
}

/**
 * A function who's purpose is to return true if a disqualification/failure condition is met.
 * Example: If a desired condition to filter was "encumbrance <= maxEncumbrance" then method implemented here would be "encumbrance > maxEncumbrance".
 *          The purpose of this is to allow for the simplified checking of non-default/excluded filter data such as maxEncumbrance being null or -1.
 *          A more fleshed out version of this would be "filter.maxEncumbrance !== null && filter.maxEncumbrance !== undefined && filter.maxEncumbrance > -1) && ((item.encumbrance || 0) > filter.maxEncumbrance"
 *
 * @type IFilterDisqualification
 */
export type IFilterDisqualification<ItemT, FilterT> = (item: ItemT, filter: FilterT) => boolean;