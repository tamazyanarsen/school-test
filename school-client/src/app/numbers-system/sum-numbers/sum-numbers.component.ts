import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {SumItemsService, SumItemType} from "./sum-items.service";
import {BehaviorSubject} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sum-numbers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [SumItemsService],
  templateUrl: './sum-numbers.component.html',
  styleUrls: ['./sum-numbers.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SumNumbersComponent {

  items = new BehaviorSubject<SumItemType[]>([])

  @Output()
  result = new EventEmitter()

  constructor(private sumItemsService: SumItemsService) {
    this.items.next(this.sumItemsService.getItems())
  }

  count = 0

  checkAnswer(answer?: string, output?: string) {
    if (answer === output) this.count++
    this.result.emit(this.count)
    console.log(this.count)
  }

}
