import { Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IModalWindow {
  data?: any;
  closeModal?: (data?: any) => void
}

@Injectable()
export class ModalWindowService {
  private portal: ViewContainerRef | undefined;
  private injector: Injector | undefined;

  private _opened$ = new BehaviorSubject<boolean>(false);

  get opened$() {
    return this._opened$.asObservable();
  }

  open<T extends IModalWindow>(component: Type<any>, data: Object, close?: (data: any) => void) {
    if (!this.portal || !this.injector) throw 'No portal attached to DOM.';

    const componentInstance = this.portal.createComponent<IModalWindow>(component, {
      injector: this.injector
    });
    componentInstance.instance.data = data;
    componentInstance.instance.closeModal = (data?: any) => {
      close && close(data);
      this.close();
    };

    this._opened$.next(true);
    return  componentInstance;
  }

  setPortal(el: ViewContainerRef) {
    this.portal = el;
    return this;
  }

  setInjector(injector: Injector) {
    this.injector = injector;
    return this;
  }

  close() {
    this.portal?.clear();
    this._opened$.next(false);
  }
}
