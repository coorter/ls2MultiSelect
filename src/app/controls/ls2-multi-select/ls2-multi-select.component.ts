import { Component, Input } from '@angular/core';

import { Ls2MultiSelectStyle } from './ls2-multi-select-enums';

@Component({
  selector: 'ls2-multi-select',
  templateUrl: './ls2-multi-select.component.html',
  styleUrls: ['./ls2-multi-select.component.css']
})
export class Ls2MultiSelectComponent {
  private _displayStyle: Ls2MultiSelectStyle = Ls2MultiSelectStyle.Buttons;


  @Input()
  itemsSource: any[];

  @Input()
  displayMemberPath: string;

  @Input()
  get displayStyle(): Ls2MultiSelectStyle {
    return this._displayStyle;
  }
  set displayStyle(val: Ls2MultiSelectStyle) {
    this._displayStyle = val;
  }

  @Input()
  maxDepth: number = 4;

  @Input()
  valueMemberPath: string;


  private get firstViewItems(): any[] {
    return this.itemsSource.slice(0, this.maxDepth);
  }
}
