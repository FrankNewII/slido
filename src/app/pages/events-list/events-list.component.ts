import { Component } from '@angular/core';
import { EventsStateService } from '../../services/events-state.service';
import { ModalWindowService } from '../../modules/modals/modal-window.service';
import { IEvent } from '../../services/get-events.service';
import { EventDetailsModalComponent } from '../../modules/shared/modals/event-details/event-details-modal.component';

@Component({
  selector: 'events-list-component',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  list$ = this.service.eventsList$;

  constructor(private service: EventsStateService, private modalService: ModalWindowService) {
  }

  openDetails(event: IEvent) {
    this.modalService.open(EventDetailsModalComponent, event)
  }
}
