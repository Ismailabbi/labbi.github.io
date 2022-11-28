import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './team-page.component';
import { teamPageRouting } from './team-page.routing';

@NgModule({
  declarations: [TeamPageComponent],
  imports: [CommonModule,
    teamPageRouting],
})
export class TeamPageModule {}
