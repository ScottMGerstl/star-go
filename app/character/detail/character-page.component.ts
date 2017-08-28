import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { SelectionStateManager, StatType } from './selection-state-manager';

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

    private rankNumbers: Array<number>;
    private characteristicNumbers: Array<number>;

    private selectionState: SelectionStateManager;

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

    constructor(private characterService: CharacterService, private zone: NgZone) {
        super();

        this.selectionState = new SelectionStateManager();
        this.selectionState.selectorNumbers = [0];
    }

    public ngOnInit(): void {
        this.character = this.characterService.getCharacter();

        if (!this.character) {
            this.character = this.characterService.getBlankCharacter();
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

    // Stat selection/modification
    private onSkillTapped(skill: Skill): void {
        if (this.mode === 'edit') {
            this.showRankSelector(skill);
        }
    }

    private showRankSelector(skill: Skill): void {
        this.selectionState.selectorTitle = skill.label + ' Rank';
        this.selectionState.selectorNumbers = [0, 1, 2, 3, 4, 5];
        this.selectionState.selectedStatType = 'Skill';
        this.selectionState.selectedStat = skill;
        this.selectionState.selection = skill.rank;

        this.snackbar.show();
    }

    private onCharacteristicTapped(characteristic: Characteristic): void {
        if (this.mode === 'edit') {
            this.showCharacteristicSelector(characteristic);
        }
    }

    private showCharacteristicSelector(characteristic: Characteristic): void {
        this.selectionState.selectorTitle = characteristic.name;
        this.selectionState.selectorNumbers = [1, 2, 3, 4, 5, 6];
        this.selectionState.selectedStatType = 'Characteristic';
        this.selectionState.selectedStat = characteristic;
        this.selectionState.selection = characteristic.value;

        this.snackbar.show();
    }

    private onSelected(selection: number): void {

        if (this.selectionState.selectedStatType === 'Skill') {

            (<Skill>this.selectionState.selectedStat).rank = selection;
        }
        else if (this.selectionState.selectedStatType === 'Characteristic') {
            (<Characteristic>this.selectionState.selectedStat).value = selection;
        }

        this.selectionState.selectedStat = null;
        this.snackbar.dismiss();
    }

    private onSelectionCancelled(): void {
        this.selectionState.selectedStat = null;
        this.snackbar.dismiss();
    }
}

type Mode = 'edit' | 'view';