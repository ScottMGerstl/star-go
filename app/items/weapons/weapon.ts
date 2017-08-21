import { Item } from './../item';

export class Weapon extends Item {
    public encumbrance: number;
    public blackMarketItem: boolean;
    public price: number;
    public special: string;
    public features: string;
    public rarity: string;

    public skill: string;
    public damage: number;
    public range: string;
    public critical: number;
    public type: string;
    public hardPoints: number;
}