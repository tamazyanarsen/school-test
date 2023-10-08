import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemType, ItemsService } from './items.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
  providers: [ItemsService]
})
export class ConvertComponent implements OnInit {
  items = new BehaviorSubject<ItemType[]>([])

  constructor(private itemService: ItemsService) {
  }

  ngOnInit(): void {
    this.items.next(this.itemService.getItems())
  }

}
