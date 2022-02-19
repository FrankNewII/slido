import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input-hint-component',
  template: '<ng-content></ng-content>',
  styles: [`
    input-hint-component {
      color: var(--gray-color);
      font-size: var(--s10);
      position: absolute;
      top: var(--s4);
      left: 0;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class InputHintComponent {
}
