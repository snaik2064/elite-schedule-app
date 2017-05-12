import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-teams-detail',
    templateUrl: 'teams-detail.html',
})
export class TeamsDetail {

    team: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.team = this.navParams.data;
    }

}
