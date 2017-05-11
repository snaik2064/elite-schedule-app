import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { MyTeams } from '../my-teams/my-teams';
import { Teams } from '../teams/teams';

@IonicPage()
@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.html',
})
export class Tournaments {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    itemTapped() {
        this.navCtrl.push(Teams);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Tournaments');
    }

}
