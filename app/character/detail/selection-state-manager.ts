import { Characteristic } from '../models/characteristic';
import { Skill } from '../models/skill';

export class SelectionStateManager {
    public selectorTitle: string;
    public selectorNumbers: Array<number>;
    public selectedStat: Skill | Characteristic;
    public selectedStatType: StatType;
    public selection: number;
}

export type StatType = 'Skill' | 'Characteristic';
