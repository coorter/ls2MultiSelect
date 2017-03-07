import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'ls2-modal',
  templateUrl: './ls2-modal.component.html',
  styleUrls: ['./ls2-modal.component.css']
})
export class Ls2ModalComponent {
  @ViewChild('childModal')
  public childModal: ModalDirective;

  open(): void {
    this.childModal.show();
  }
}
