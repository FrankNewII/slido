import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() type: 'primary' | 'circle' = 'primary';
  @Input() color: 'green' | 'gray' = 'green';
  @Input() placeholder: string = 'BUTTON';
  @HostBinding('class.disabled') @Input() disabled = false;
}
