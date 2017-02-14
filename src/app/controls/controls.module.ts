import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ls2MultiSelectComponent } from './ls2-multi-select/ls2-multi-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ls2MultiSelectComponent],
  exports: [Ls2MultiSelectComponent]
})
export class ControlsModule { }
