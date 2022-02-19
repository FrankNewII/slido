import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input-error-component',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class InputErrorComponent {
}
