import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { GetEventsService } from './services/get-events.service';
import { EventsStateService } from './services/events-state.service';
import { SharedModule } from './modules/shared/shared.module';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExitAboutGuard } from './guards/can-deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CreateFormComponent,
    EventsListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    GetEventsService,
    EventsStateService,
    ExitAboutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
