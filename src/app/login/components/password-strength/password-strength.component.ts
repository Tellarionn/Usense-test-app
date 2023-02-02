import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  private changeBarColor(value: string) {
    switch (value) {
      case 'empty':
        this.firstBar = 'gray';
        this.secondBar = 'gray';
        this.thirdBar = 'gray';
        break;
      case 'notEnough':
        this.firstBar = 'red';
        this.secondBar = 'red';
        this.thirdBar = 'red';
        break;
      case 'easy':
        this.firstBar = 'red';
        this.secondBar = 'gray';
        this.thirdBar = 'gray';
        break;
      case 'medium':
        this.firstBar = 'yellow';
        this.secondBar = 'yellow';
        this.thirdBar = 'gray';
        break;
      case 'hard':
        this.firstBar = 'green';
        this.secondBar = 'green';
        this.thirdBar = 'green';
        break;
      default:
        break;
    }
  }

  ngOnChanges(): void {
    this.changeBarColor(this.changeBarValue);
  }
}
