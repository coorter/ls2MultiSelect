import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap';

import { Ls2MultiSelectComponent } from './ls2-multi-select/ls2-multi-select.component';
import { Ls2MultiSelectItemComponent } from './ls2-multi-select/ls2-multi-select-item.component';
import { Ls2ModalComponent } from './ls2-modal/ls2-modal.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [Ls2MultiSelectComponent, Ls2MultiSelectItemComponent, Ls2ModalComponent],
  exports: [Ls2MultiSelectComponent, Ls2MultiSelectItemComponent]
})
export class ControlsModule { }
