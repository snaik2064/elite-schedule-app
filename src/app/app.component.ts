import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Tournaments } from '../pages/tournaments/tournaments';
import { Teams } from '../pages/teams/teams';
import { TeamsDetail } from '../pages/teams-detail/teams-detail';
import { MyTeams } from '../pages/my-teams/my-teams';
import { Game } from '../pages/game/game';
import { Standings } from '../pages/standings/standings';
import { TeamHome } from '../pages/team-home/team-home';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = MyTeams;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tournaments', component: Tournaments },
            { title: 'Teams', component: Teams },
            { title: 'TeamsDetail', component: TeamsDetail },
            { title: 'MyTeams', component: MyTeams },
            { title: 'Game', component: Game },
            { title: 'Standings', component: Standings },
            { title: 'TeamHome', component: TeamHome },

        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    goHome() {
        this.nav.push(MyTeams);
    }

    goToTournament() {
        this.nav.push(Tournaments);
    }
}
