import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalWindowService } from './modules/modals/modal-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class.modal-opened') opened = false;

  constructor(private modalService: ModalWindowService) {
  }

  ngOnInit() {
    this.modalService.opened$.subscribe(opened => this.opened = opened)
  }
}
