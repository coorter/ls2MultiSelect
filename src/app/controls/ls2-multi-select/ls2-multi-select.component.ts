import { Component, Input } from '@angular/core';

@Component({
  selector: 'ls2-multi-select',
  templateUrl: './ls2-multi-select.component.html',
  styleUrls: ['./ls2-multi-select.component.css']
})
export class Ls2MultiSelectComponent {
  @Input()
  itemsSource: any[];

  @Input()
  displayMemberPath: string;

  @Input()
  valueMemberPath: string;
}
