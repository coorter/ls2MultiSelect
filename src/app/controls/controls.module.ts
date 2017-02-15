import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ls2MultiSelectComponent } from './ls2-multi-select/ls2-multi-select.component';
import { Ls2MultiSelectItemComponent } from './ls2-multi-select/ls2-multi-select-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ls2MultiSelectComponent, Ls2MultiSelectItemComponent],
  exports: [Ls2MultiSelectComponent, Ls2MultiSelectItemComponent]
})
export class ControlsModule { }
