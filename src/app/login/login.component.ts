import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EColors } from '../shared/enums/colors';
import { EMessages } from '../shared/enums/messages';
import { ERegExp } from '../shared/enums/reg-exp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public passwordControl: any = new FormControl('', [Validators.required]);
  private subscription$!: Subscription;

  public changeBarValue!: string;
  public title: string = EMessages.enterPassword;

  private readonly isNumberRegExp = new RegExp(ERegExp.isNumber);
  private readonly isCharacterRegExp = new RegExp(ERegExp.isCharacter);
  private readonly isSymbolRegExp = new RegExp(ERegExp.isSymbol);
  private readonly isNumberCharacterRegExp = new RegExp(ERegExp.isNumberCharacter);
  private readonly isNumberSymbolRegExp = new RegExp(ERegExp.isNumberSymbol);
  private readonly isCharacterSymbolRegExp = new RegExp(ERegExp.isCharacterSymbol);
  private readonly isPasswordHardRegExp = new RegExp(ERegExp.isHard);

  ngOnInit(): void {
    this.subscription$ = this.passwordControl.valueChanges.subscribe(
      (value: string) => {
        this.isEmpty(value);
        this.isLengthEnough(value),
        this.isPasswordEasy(value),
        this.isPasswordMedium(value);
        this.isPasswordHard(value);
      }
    );
  }

  private isEmpty(value: string): void {
    if (value.length === 0 || !value) {
      this.changeBarValue = EColors.empty;
      this.title = EMessages.enterPassword;
    }
  }

  private isLengthEnough(value: string): void {
    if (value.length > 0 && value.length < 8) {
      this.changeBarValue = EColors.notEnough;
      this.title = EMessages.notEnough;
    }
  }

  private isPasswordEasy(value: string): void {
    if (
      this.isCharacterRegExp.test(value) ||
      this.isNumberRegExp.test(value) ||
      this.isSymbolRegExp.test(value)
    ) {
      this.changeBarValue = EColors.easy;
      this.title = EMessages.easyPassword;
    }
  }

  private isPasswordMedium(value: string): void {
    if (
      this.isNumberCharacterRegExp.test(value) ||
      this.isNumberSymbolRegExp.test(value) ||
      this.isCharacterSymbolRegExp.test(value)
    ) {
      this.changeBarValue = EColors.medium;
      this.title = EMessages.mediumPassword;
    }
  }

  private isPasswordHard(value: string): void {
    if (this.isPasswordHardRegExp.test(value)) {
      this.changeBarValue = EColors.hard;
      this.title = EMessages.hardPassword;
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
