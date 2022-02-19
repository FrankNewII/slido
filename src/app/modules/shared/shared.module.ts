import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponentModule } from '../input/input-component.module';
import { ModalWindowModule } from '../modals/modal-window.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventDetailsModalComponent } from './modals/event-details/event-details-modal.component';
import { DatepickerModalComponent } from './modals/datepicker/datepicker-modal.component';
import { DatePipe } from '@angular/common';
import { LeaveModalComponent } from './modals/leave-form/leave-modal.component';

const SHARED_COMPONENTS = [
  ButtonComponent,
  EventDetailsModalComponent,
  DatepickerModalComponent,
  LeaveModalComponent
];

const MATERIAL_COMPONENTS = [
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    InputComponentModule,
    ModalWindowModule,
    ...MATERIAL_COMPONENTS,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...MATERIAL_COMPONENTS,
    InputComponentModule,
    ModalWindowModule
  ],
  providers: [DatePipe]
})
export class SharedModule {
}
