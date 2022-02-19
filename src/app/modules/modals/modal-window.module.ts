import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalWindowService } from './modal-window.service';
import { ModalPortalComponent } from './portal/modal-portal.component';

@NgModule({
  declarations: [
    ModalPortalComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ModalPortalComponent
  ],
  providers: [ModalWindowService]
})
export class ModalWindowModule { }
