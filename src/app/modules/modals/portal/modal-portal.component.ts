import { Component, Injector, ViewContainerRef } from '@angular/core';
import { ModalWindowService } from '../modal-window.service';

@Component({
  selector: 'modal-portal-component',
  template: '',
})
export class ModalPortalComponent {
  constructor(viewContainerRef: ViewContainerRef, service: ModalWindowService, injector: Injector) {
    service
      .setPortal(viewContainerRef)
      .setInjector(injector);
  }
}
