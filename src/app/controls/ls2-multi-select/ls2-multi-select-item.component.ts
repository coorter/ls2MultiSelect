import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ls2MultiSelectComponent } from './ls2-multi-select.component';

@Component({
  selector: 'ls2-multi-select-item',
  templateUrl: './ls2-multi-select-item.component.html',
  styleUrls: ['./ls2-multi-select-item.component.css']
})
export class Ls2MultiSelectItemComponent {
  private parent: Ls2MultiSelectComponent;


  @Input()
  dataItem: any;

  @Input()
  isSelected: boolean = false;

  @Output()
  isSelectedChanged = new EventEmitter<boolean>();


  constructor(parent: Ls2MultiSelectComponent) {
    this.parent = parent;
  }


  private selecttionChanged(event: any): void {
    this.isSelected = !this.isSelected;
    this.isSelectedChanged.next(this.isSelected);
  }
}
