import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tournaments } from '../tournaments/tournaments';

@IonicPage()
@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.html',
})
export class MyTeams {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goToTournaments() {
        this.navCtrl.push(Tournaments);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyTeams');
    }

}
