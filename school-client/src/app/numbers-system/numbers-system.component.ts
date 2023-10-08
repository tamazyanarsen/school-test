import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ConvertComponent } from './convert/convert.component';
import { SumNumbersComponent } from './sum-numbers/sum-numbers.component';

@Component({
  templateUrl: './numbers-system.component.html',
  styleUrls: ['./numbers-system.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ConvertComponent, CommonModule, SumNumbersComponent],
  standalone: true
})
export class NumbersSystemComponent {

}
