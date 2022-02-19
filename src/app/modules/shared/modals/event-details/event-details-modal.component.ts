import { Component, OnInit } from '@angular/core';
import { IModalWindow } from '../../../modals/modal-window.service';
import { IEvent } from '../../../../services/get-events.service';

@Component({
  templateUrl: './event-details-modal.component.html',
  styleUrls: ['./event-details-modal.component.scss']
})
export class EventDetailsModalComponent implements IModalWindow, OnInit {
  data: IEvent | undefined;
  closeModal: (() => void) | undefined;

  opened = false;

  ngOnInit() {
    setTimeout(() => this.opened = true);
  }

  close() {
    this.opened = false;

    setTimeout(() => {
      this.closeModal && this.closeModal();
    }, 200);
  }
}
