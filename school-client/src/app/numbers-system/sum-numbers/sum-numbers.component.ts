import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SumItemType, SumItemsService } from "./sum-items.service";

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
export class SumNumbersComponent implements OnInit {

  items: SumItemType[] = []

  @Output()
  result = new EventEmitter()

  constructor(private sumItemsService: SumItemsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.items = this.sumItemsService.getItems()
    this.cdr.detectChanges()
  }

  checkAnswer() {
    console.log(this.items)
    this.result.emit(this.items.filter(e => e.answer === e.output).length)
  }

}
