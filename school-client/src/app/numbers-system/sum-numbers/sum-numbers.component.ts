import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {SumItemsService, SumItemType} from "./sum-items.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-sum-numbers',
  standalone: true,
  imports: [CommonModule],
  providers: [SumItemsService],
  templateUrl: './sum-numbers.component.html',
  styleUrls: ['./sum-numbers.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SumNumbersComponent {

  items = new BehaviorSubject<SumItemType[]>([])

  constructor(private sumItemsService: SumItemsService) {
    this.items.next(this.sumItemsService.getItems())
  }

}
