import { Component, OnInit } from '@angular/core';
import { IModalWindow } from '../../../modals/modal-window.service';


@Component({
  templateUrl: './datepicker-modal.component.html',
  styleUrls: ['./datepicker-modal.component.scss']
})
export class DatepickerModalComponent implements IModalWindow, OnInit {
  closeModal: ((date: Date) => void) | undefined;

  opened = false;

  selected: Date = new Date();

  ngOnInit() {
    setTimeout(() => this.opened = true);
  }

  close() {
    this.opened = false;
    setTimeout(() => {
      this.closeModal && this.closeModal(this.selected);
    }, 200);
  }
}
