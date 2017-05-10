import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsDetail } from './teams-detail';

@NgModule({
  declarations: [
    TeamsDetail,
  ],
  imports: [
    IonicPageModule.forChild(TeamsDetail),
  ],
  exports: [
    TeamsDetail
  ]
})
export class TeamsDetailModule {}
