import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectModeComponent } from './select-mode/select-mode.component';
import { SelectUniversityComponent } from './select-mode/select-university/select-university.component';
import { MapComponent } from './select-mode/select-university/select-class/map/map.component';

const routes: Routes = [
  { path: 'mode', component: SelectModeComponent },
  { path: 'mode/search', component: SelectUniversityComponent },
  { path: 'mode/search/map', component: MapComponent },
  { path: '',   redirectTo: '/mode', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
