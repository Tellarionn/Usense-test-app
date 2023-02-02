import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EColors } from 'src/app/shared/enums/colors';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() public changeBarValue!: string;

  public firstBar!: string;
  public secondBar!: string;
  public thirdBar!: string;

  ngOnChanges(): void {
    this.changeBarColor(this.changeBarValue);
  }

  private changeBarColor(value: string) {
    switch (value) {
      case 'empty':
        this.firstBar = EColors.gray;
        this.secondBar = EColors.gray;
        this.thirdBar = EColors.gray;
        break;
      case 'notEnough':
        this.firstBar = EColors.red;
        this.secondBar = EColors.red;
        this.thirdBar = EColors.red;
        break;
      case 'easy':
        this.firstBar = EColors.red;
        this.secondBar = EColors.gray;
        this.thirdBar = EColors.gray;
        break;
      case 'medium':
        this.firstBar = EColors.yellow;
        this.secondBar = EColors.yellow;
        this.thirdBar = EColors.gray;
        break;
      case 'hard':
        this.firstBar = EColors.green;
        this.secondBar = EColors.green;
        this.thirdBar = EColors.green;
        break;
      default:
        break;
    }
  }
}
