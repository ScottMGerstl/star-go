import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BaseComponent } from '../../shared/base-component/base.component';
import { DiceListConfiguration } from '../../shared/dice/list/dice-list-config';
import { SnackbarDirective } from '../../shared/snackbar/snackbar.directive';

import { CharacterService } from '../character.service';

import { Character } from '../models/character';
import { Characteristic } from '../models/characteristic';
import { Characteristics } from '../models/characteristics';
import { Skill } from '../models/skill';
import { ThresholdStatistic } from '../models/threshold-stat';

@Component({
    selector: 'character-page',
    moduleId: module.id,
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.css']
})
export class CharacterDetailComponent extends BaseComponent implements OnInit {

    @ViewChild(SnackbarDirective) private snackbar: SnackbarDirective;

    private mode: Mode = 'view';
    private character: Character;
    private numbers: Array<number>;

    private selectedRank: number;
    private selectedSkill: Skill;

    private get characteristics(): Array<Characteristic> {
        const result: Array<Characteristic> = [];

        for (const i in this.character.characteristics) {
            result.push(this.character.characteristics[i]);
        }

        return result;
    }

    private get skills(): Array<Skill> {
        const result: Array<Skill> = [];

        for (const i in this.character.skills) {
            if ((this.character.skills[i] instanceof Array) === false) {
                result.push(this.character.skills[i]);
            }
        }

        return result;
    }

    constructor(private characterService: CharacterService) {
        super();

        this.selectedRank = 0;
        this.selectedSkill = new Skill();
        this.numbers = [0, 1, 2, 3, 4, 5];
    }

    public ngOnInit(): void {
        this.character = this.characterService.getCharacter();

        if (!this.character) {
            this.character = this.characterService.getBlankCharacter();
        }
    }

    private onSkillTapped(skill: Skill): void {
        if (this.mode === 'edit') {
            this.showRankSelector(skill);
        }
    }

    private getDiceConfig(skill: Skill): DiceListConfiguration {
        const config: DiceListConfiguration = new DiceListConfiguration();

        const characteristic: Characteristic = this.characteristics.find((ch) => ch.abbreviation === skill.characteristicCategory);

        const characteristicValue: number = characteristic.value;
        const skillRank: number = skill.rank;

        if (characteristicValue >= skillRank) {
            config.ability = characteristicValue - skillRank;
            config.proficiency = skillRank;
        }
        else {
            config.ability = skillRank - characteristicValue;
            config.proficiency = characteristicValue;
        }

        return config;
    }

    private onEditTapped(): void {
        this.mode = 'edit';
    }

    private onSaveTapped(): void {
        this.mode = 'view';
    }

    private showRankSelector(skill: Skill): void {

        this.selectedRank = skill.rank;
        this.selectedSkill = skill;

        this.snackbar.show();
    }

    private saveSelectedRank(rank: number): void {
        this.selectedSkill.rank = rank;
        this.selectedRank = rank;

        this.dismissRankSelector();
    }

    private dismissRankSelector(): void {
        this.snackbar.dismiss(() => this.selectedSkill = null);
    }
}

type Mode = 'edit' | 'view';