import { Component, OnInit } from '@angular/core';
import { IModalWindow } from '../../../modals/modal-window.service';

@Component({
  templateUrl: './leave-modal.component.html',
  styleUrls: ['./leave-modal.component.scss']
})
export class LeaveModalComponent implements IModalWindow, OnInit {
  closeModal: ((isLeaving: boolean) => void) | undefined;

  opened = false;

  ngOnInit() {
    setTimeout(() => this.opened = true);
  }

  close(isLeaving: boolean) {
    this.opened = false;

    setTimeout(() => {
      this.closeModal && this.closeModal(isLeaving);
    }, 200);
  }
}
