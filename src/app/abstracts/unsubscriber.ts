import { Directive, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Directive()
export abstract class UnsubscriberDirective implements OnDestroy {
  private destroy$ = new Subject<void>();
  protected takeUntilDestroy = takeUntil(this.destroy$);

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
