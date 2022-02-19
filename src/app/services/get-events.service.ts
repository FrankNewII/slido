import { Injectable } from '@angular/core';
import { Observable, of, debounceTime, tap } from 'rxjs';

export interface IEvent {
  id: number;
  date: number;
  name: string;
  description: string;
}

@Injectable()
export class GetEventsService {
  private events: IEvent[];

  constructor() {
    this.events = [];
    for(let i = 0; i < 20; i++) {
      this.events.push({
        id: i,
        date: Date.now(),
        name: 'Name ' + i,
        description: ('Name ' + i).repeat(i)
      });
    }
  }

  getList(filter: string): Observable<IEvent[]> {
    return of(
        this.events
          .filter(event => (event.name + event.description).includes(filter))
      )
      .pipe(tap(v => console.log(v)), debounceTime(1000));
  }

  addEvent(event: IEvent) {
    return of(event).pipe(tap(() => this.events.push(event)), debounceTime(1000));
  }
}
