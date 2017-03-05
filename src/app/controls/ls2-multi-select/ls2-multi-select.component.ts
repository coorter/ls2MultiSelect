import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ls2MultiSelectStyle } from './ls2-multi-select-enums';
import { Ls2MultiSelectItemComponent } from './ls2-multi-select-item.component';
import { Ls2MultiSelectOptions } from './ls2-multi-select-options';

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
	options: Ls2MultiSelectOptions = new Ls2MultiSelectOptions();

	@Input()
	selectedItems: any[] = [];

	@Output()
	selectedItemsChanged = new EventEmitter<any>();

	@Input()
	valueMemberPath: string;


	clearAll(): void {
		for (let item of this.selectedItems.splice(0)) {
			this.onItemIsSelectedChanged(item, false);
		}
	}


	private onItemIsSelectedChanged(item: Ls2MultiSelectItemComponent, isSelected: boolean) {
		if (isSelected) {
			this.selectedItems.push(item);
		} else {
			let idx = this.selectedItems.indexOf(item);
			if (idx >= 0) {
				this.selectedItems.splice(idx, 1);
			}
		}
		this.selectedItemsChanged.next({ item, isSelected });
	}


	private get firstViewItems(): any[] {
		return this.itemsSource.slice(0, this.options.maxDepth);
	}

	private isSelected(item: any): boolean {
		return this.selectedItems.indexOf(item) >= 0;
	}

	private get restViewItems(): any[] {
		return this.itemsSource.slice(this.options.maxDepth);
	}
}
