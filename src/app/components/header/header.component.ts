import { Component } from '@angular/core';
import { EventsStateService } from '../../services/events-state.service';
import { ActivatedRoute } from '@angular/router';
import { EPages } from '../../app-routing.module';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  EPages = EPages;
  filter$ = this.eventsState.filter$;
  list$ = this.eventsState.eventsList$;

  constructor(public eventsState: EventsStateService, private route: ActivatedRoute) {
    console.log(route);
  }

}
