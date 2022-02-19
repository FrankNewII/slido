import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { ExitAboutGuard } from './guards/can-deactivate.guard';

export enum EPages {
  Create = 'create',
  List = 'list',
}

const routes: Routes = [
  {
    path: EPages.List,
    component: EventsListComponent
  },
  {
    path: EPages.Create,
    component: CreateFormComponent,
    canDeactivate: [ExitAboutGuard]
  },
  {
    path: '**',
    redirectTo: EPages.List,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
