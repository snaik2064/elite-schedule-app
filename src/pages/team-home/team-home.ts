import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Standings } from '../standings/standings';
import { TeamsDetail } from '../teams-detail/teams-detail';
//import { MyTeams } from '../my-teams/my-teams';

@IonicPage()
@Component({
    selector: 'page-team-home',
    templateUrl: 'team-home.html',
})
export class TeamHome {

    team: any;
    teamsDetailTab = TeamsDetail;
    standingsTab = Standings;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.team = this.navParams.data;
    }

    goHome() {
        //this.navCtrl.push(MyTeams);
        this.navCtrl.popToRoot();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TeamHome');
    }

}
