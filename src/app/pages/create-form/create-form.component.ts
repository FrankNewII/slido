import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsStateService } from '../../services/events-state.service';
import { GetEventsService } from '../../services/get-events.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { EPages } from '../../app-routing.module';
import { ModalWindowService } from '../../modules/modals/modal-window.service';
import { DatepickerModalComponent } from '../../modules/shared/modals/datepicker/datepicker-modal.component';
import { DatePipe } from '@angular/common';
import { CanDeactivateComponent } from '../../guards/can-deactivate.guard';
import { UnsubscriberDirective } from '../../abstracts/unsubscriber';

@Component({
  selector: 'create-form-component',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent
  extends UnsubscriberDirective
  implements CanDeactivateComponent {

  selected: string = '';
  eventForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', Validators.required)
  });
  formatDate = (date: Date) => this.datePipe.transform(date);

  constructor(
    private eventsService: GetEventsService,
    private eventsStateService: EventsStateService,
    private router: Router,
    private modalService: ModalWindowService,
    private datePipe: DatePipe
  ) {
    super();
  }

  addEvent() {
    this.eventsService
      .addEvent(this.eventForm.value)
      .pipe(
        switchMap(_ => {
          this.eventForm.markAsPristine();
          return this.router.navigate([EPages.List]);
        })
      )
      .subscribe(() => this.eventsStateService.updateList());
  }

  openCalendar() {
    this.modalService.open(DatepickerModalComponent, {}, data => {
      const date = this.eventForm.get('date');
      if (date) {
        date.setValue(this.datePipe.transform(data));
        date.markAsDirty();
      }

    })
  }

  canLeave() {
    return this.eventForm.pristine;
  }
}
