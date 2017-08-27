import { Injectable } from '@angular/core';
import { StorageService, StorageServiceKeys } from '../shared/storage/storage.service';

import { Character } from './models/character';
import { Characteristic } from './models/characteristic';
import { Characteristics } from './models/characteristics';
import { Skill } from './models/skill';
import { ThresholdStatistic } from './models/threshold-stat';

@Injectable()
export class CharacterService {
    constructor(private storage: StorageService) { }

    public getCharacter(): Character {
        return this.storage.getValue<Character>(StorageServiceKeys.character);
    }

    public saveCharacter(character: Character): boolean {
        this.storage.setValue<Character>(StorageServiceKeys.character, character);

        return true;
    }

    public getBlankCharacter(): Character {
        const character: Character = {
            defenseMelee: 0,
            defenseRanged: 0,
            soak: 0,
            strain: {
                threshold: 0,
                current: 0
            },
            wounds: {
                threshold: 0,
                current: 0
            },
            characteristics: {
                agility: {
                    abbreviation: 'Ag',
                    name: 'Agility',
                    value: 1
                },
                brawn: {
                    abbreviation: 'Br',
                    name: 'Brawn',
                    value: 2
                },
                cunning: {
                    abbreviation: 'Cun',
                    name: 'Cunning',
                    value: 3
                },
                intellect: {
                    abbreviation: 'Int',
                    name: 'Intellect',
                    value: 4
                },
                presence: {
                    abbreviation: 'Pr',
                    name: 'Presence',
                    value: 5
                },
                willpower: {
                    abbreviation: 'Will',
                    name: 'Willpower',
                    value: 6
                }
            },
            skills: {
                astrogation: {
                    characteristicCategory: 'Int',
                    label: 'Astrogation',
                    rank: 4,
                    skillGroup: 'General'
                },
                athletics: {
                    characteristicCategory: 'Br',
                    label: 'Athletics',
                    rank: 2,
                    skillGroup: 'General'
                },
                charm: {
                    characteristicCategory: 'Pr',
                    label: 'Presence',
                    rank: 3,
                    skillGroup: 'General'
                },
                coersion: {
                    characteristicCategory: 'Will',
                    label: 'Coersion',
                    rank: 0,
                    skillGroup: 'General'
                },
                computers: {
                    characteristicCategory: 'Int',
                    label: 'Computers',
                    rank: 0,
                    skillGroup: 'General'
                },
                cool: {
                    characteristicCategory: 'Pr',
                    label: 'Cool',
                    rank: 0,
                    skillGroup: 'General'
                },
                coordination: {
                    characteristicCategory: 'Ag',
                    label: 'Coordination',
                    rank: 0,
                    skillGroup: 'General'
                },
                deception: {
                    characteristicCategory: 'Cun',
                    label: 'Deception',
                    rank: 0,
                    skillGroup: 'General'
                },
                discipline: {
                    characteristicCategory: 'Will',
                    label: 'Discipline',
                    rank: 0,
                    skillGroup: 'General'
                },
                leadership: {
                    characteristicCategory: 'Pr',
                    label: 'Leadership',
                    rank: 0,
                    skillGroup: 'General'
                },
                mechanics: {
                    characteristicCategory: 'Int',
                    label: 'Mechanics',
                    rank: 0,
                    skillGroup: 'General'
                },
                medicine: {
                    characteristicCategory: 'Int',
                    label: 'Medicine',
                    rank: 0,
                    skillGroup: 'General'
                },
                negotiation: {
                    characteristicCategory: 'Pr',
                    label: 'Negotiation',
                    rank: 0,
                    skillGroup: 'General'
                },
                perception: {
                    characteristicCategory: 'Cun',
                    label: 'Perception',
                    rank: 0,
                    skillGroup: 'General'
                },
                pilotingPlanetary: {
                    characteristicCategory: 'Ag',
                    label: 'Piloting - Planetary',
                    rank: 0,
                    skillGroup: 'General'
                },
                pilotingSpace: {
                    characteristicCategory: 'Ag',
                    label: 'Piloting - Space',
                    rank: 0,
                    skillGroup: 'General'
                },
                resilience: {
                    characteristicCategory: 'Br',
                    label: 'Resiliance',
                    rank: 0,
                    skillGroup: 'General'
                },
                skullduggery: {
                    characteristicCategory: 'Cun',
                    label: 'Skullduggery',
                    rank: 0,
                    skillGroup: 'General'
                },
                stealth: {
                    characteristicCategory: 'Ag',
                    label: 'Stealth',
                    rank: 0,
                    skillGroup: 'General'
                },
                streetwise: {
                    characteristicCategory: 'Cun',
                    label: 'Streetwise',
                    rank: 0,
                    skillGroup: 'General'
                },
                survival: {
                    characteristicCategory: 'Cun',
                    label: 'Survival',
                    rank: 0,
                    skillGroup: 'General'
                },
                vigilance: {
                    characteristicCategory: 'Will',
                    label: 'Vigilance',
                    rank: 0,
                    skillGroup: 'General'
                },
                brawl: {
                    characteristicCategory: 'Br',
                    label: 'Brawl',
                    rank: 0,
                    skillGroup: 'Combat'
                },
                gunnery: {
                    characteristicCategory: 'Ag',
                    label: 'Gunnery',
                    rank: 0,
                    skillGroup: 'Combat'
                },
                melee: {
                    characteristicCategory: 'Br',
                    label: 'Melee',
                    rank: 0,
                    skillGroup: 'Combat'
                },
                rangedLight: {
                    characteristicCategory: 'Ag',
                    label: 'Ranged - Light',
                    rank: 0,
                    skillGroup: 'Combat'
                },
                rangedHeavy: {
                    characteristicCategory: 'Ag',
                    label: 'Ranged - Heavy',
                    rank: 0,
                    skillGroup: 'Combat'
                },
                coreWorlds: {
                    characteristicCategory: 'Int',
                    label: 'Core Worlds',
                    rank: 0,
                    skillGroup: 'Knowledge'
                },
                education: {
                    characteristicCategory: 'Int',
                    label: 'Education',
                    rank: 0,
                    skillGroup: 'Knowledge'
                },
                lore: {
                    characteristicCategory: 'Int',
                    label: 'Lore',
                    rank: 0,
                    skillGroup: 'Knowledge'
                },
                outerRim: {
                    characteristicCategory: 'Int',
                    label: 'Outer Rim',
                    rank: 0,
                    skillGroup: 'Knowledge'
                },
                underworld: {
                    characteristicCategory: 'Int',
                    label: 'Underworld',
                    rank: 0,
                    skillGroup: 'Knowledge'
                },
                xenology: {
                    characteristicCategory: 'Int',
                    label: 'Xenology',
                    rank: 0,
                    skillGroup: 'Knowledge'
                },
                custom : []
            }
        };

        return character;
    }
}