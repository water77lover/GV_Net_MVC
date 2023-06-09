import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { CurrentFormComponent } from './_components/current-form/current-form.component';
import { MatchesComponent } from './_components/matches/matches.component';
import { TeamsComponent } from './_components/teams/teams.component';
import { EventsComponent } from './_components/events/events.component';
import { ManageLayoutsComponent } from './_components/manage-layouts/manage-layouts.component';
import { ScannerComponent } from './scanner.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout/default' },
  {
    path: '',
    component: ScannerComponent,
    children: [
      { path: 'managelayouts', component: ManageLayoutsComponent },
      { path: 'layout/:gridtype', component: HomeComponent },
      { path: 'form/:homeId/:type', component: CurrentFormComponent },
      { path: 'matches', component: MatchesComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'events', component: EventsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScannerRoutingModule { }
