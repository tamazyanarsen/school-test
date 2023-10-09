import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ItemsService, ItemType} from './items.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  standalone: true,
  providers: [ItemsService]
})
export class ConvertComponent implements OnInit {
  items = new BehaviorSubject<ItemType[]>([])
  count = 0

  constructor(private itemService: ItemsService) {
  }

  @Output()
  result = new EventEmitter()

  checkAnswer(answer?: string, output?: string) {
    if (answer === output) this.count++
    this.result.emit(this.count)
    console.log(this.count)
  }

  ngOnInit(): void {
    this.items.next(this.itemService.getItems())
  }

}
