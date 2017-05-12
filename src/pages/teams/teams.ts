import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHome } from '../team-home/team-home';

@IonicPage()
@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html',
})

export class Teams {

    teams = [
        { id:1, name: 'HC Elite'},
        { id:2, name: 'Team Takeover'},
        { id:3, name: 'Dc Thunder'}
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    itemTapped($event, team) {
        this.navCtrl.push(TeamHome, team);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Teams');
    }

}
