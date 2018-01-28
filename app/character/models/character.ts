import { Characteristics } from './characteristics';
import { Skills } from './skills';
import { ThresholdStatistic } from './threshold-stat';

export class Character {
    public soak: number;

    public defenseRanged: number;
    public defenseMelee: number;

    public wounds: ThresholdStatistic;
    public strain: ThresholdStatistic;

    public characteristics: Characteristics;
    public skills: Skills;

    constructor() {
        this.wounds = new ThresholdStatistic();
        this.strain = new ThresholdStatistic();
        this.characteristics = new Characteristics();
        this.skills = new Skills();
    }
}