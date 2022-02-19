import { Injectable } from '@angular/core';
import { GetEventsService } from './get-events.service';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, Observable, race, share, shareReplay, startWith, Subject, switchMap, tap } from 'rxjs';

@Injectable()
export class EventsStateService {
  private _filter$ = new BehaviorSubject<string>('');
  private reload$ = new Subject<void>();
  private updating$ = this._filter$.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  eventsList$ = combineLatest([this.updating$, this.reload$.pipe(startWith(1))])
    .pipe(
      switchMap(([filter]) => this.eventsService.getList(filter)),
      shareReplay()
    );

  constructor(private eventsService: GetEventsService) {
  }

  get filter$(): Observable<string> {
    return this._filter$.asObservable();
  }

  updateFilter(filter: any) {
    console.log(filter);
    this._filter$.next(filter);
  }

  updateList() {
    this.reload$.next();
    return this.eventsList$;
  }
}
