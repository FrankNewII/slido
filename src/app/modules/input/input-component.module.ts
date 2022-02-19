import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './input.component';
import { InputHintComponent } from './components/input-hint.component';
import { InputErrorComponent } from './components/input-error.component';

const SHARED_COMPONENTS = [
  InputComponent,
  InputHintComponent,
  InputErrorComponent
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class InputComponentModule { }
