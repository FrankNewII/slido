import { CanDeactivate } from '@angular/router';
import { ModalWindowService } from '../modules/modals/modal-window.service';
import { LeaveModalComponent } from '../modules/shared/modals/leave-form/leave-modal.component';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CanDeactivateComponent {
  canLeave: () => boolean;
}

@Injectable()
export class ExitAboutGuard implements CanDeactivate<CanDeactivateComponent>{
  constructor(private modalService: ModalWindowService) {
  }
  canDeactivate(component: CanDeactivateComponent): boolean | Observable<boolean>{
    if (!component.canLeave()) {
      return from<Promise<boolean>>(new Promise(res => {
        this.modalService.open(LeaveModalComponent, {}, (isLeaving: boolean) => res(isLeaving));
      }));
    }
    return true;
  }
}
