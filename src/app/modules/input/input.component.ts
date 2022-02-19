import { Component, Input, Output, ViewEncapsulation, EventEmitter, forwardRef, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum EInputComponentStates {
  Focused = 'focused',
  Untouched = 'untouched',
  Touched = 'touched',
  Invalid = 'invalid',
  Valid = 'valid'
}

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
})
export class InputComponent implements ControlValueAccessor, OnChanges {
  EInputComponentStates = EInputComponentStates;

  @HostBinding('class.disabled')
  @Input() disabled = false;
  @Input() type: 'text' | 'number' | 'email' | 'url' = 'text';
  @Input() value: string | null = '';
  @Input() placeholder: string | null = '';
  @Input() displayLike = (str: any) => str;

  @Output() changed = new EventEmitter<string>();

  state: EInputComponentStates = EInputComponentStates.Untouched;

  updateFormControl = (str: string) => {};
  touchFormControl = () => {};

  ngOnChanges(changes: SimpleChanges) {

  }

  writeValue(value: string) {
    this.changed.emit(value);
    this.value = value;
  }

  registerOnChange(fn: (str: string) => void) {
    this.updateFormControl = fn;
  }

  registerOnTouched(fn: () => void) {
    this.touchFormControl = fn;

  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onKeyUp(ev: KeyboardEvent) {
    const value = (ev.target as HTMLInputElement).value;
    this.updateFormControl(value);
    this.changed.emit(value);
  }
}
