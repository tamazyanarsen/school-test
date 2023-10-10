import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ItemType, ItemsService } from './items.service';

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
  items: ItemType[] = []

  constructor(private itemService: ItemsService, private cdr: ChangeDetectorRef) {
  }

  @Output()
  result = new EventEmitter()

  checkAnswer() {
    console.log(this.items)
    this.result.emit(this.items.filter(e => e.userAnswer === e.output).length)
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
    this.cdr.detectChanges()
  }

}
