import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sum-numbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sum-numbers.component.html',
  styleUrls: ['./sum-numbers.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SumNumbersComponent {
}
