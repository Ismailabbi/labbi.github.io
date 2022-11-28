import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPageModule } from './Pages/team-page/team-page.module';

const routes: Routes = [
  { path: 'teams',
  loadChildren: () => import('./Pages/team-page/team-page.module').then(m => m.TeamPageModule)
}
];

@NgModule({
  imports: [TeamPageModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }