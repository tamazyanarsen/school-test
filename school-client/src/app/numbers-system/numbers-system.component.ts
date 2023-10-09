import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ConvertComponent} from './convert/convert.component';
import {SumNumbersComponent} from './sum-numbers/sum-numbers.component';

@Component({
  templateUrl: './numbers-system.component.html',
  styleUrls: ['./numbers-system.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ConvertComponent, CommonModule, SumNumbersComponent],
  standalone: true
})
export class NumbersSystemComponent {

  convertResult = 0
  sumNumbers = 0

  getConvertResult(event: number) {
    this.convertResult = event
  }

  getSumNumbersResult(event: number) {
    this.sumNumbers = event
  }

  finishJob() {
    alert(Math.round((this.convertResult + this.sumNumbers) / 4))
  }
}
