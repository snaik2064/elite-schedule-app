import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Tournaments } from '../pages/tournaments/tournaments';
import { Teams } from '../pages/teams/teams';
import { TeamsDetail } from '../pages/teams-detail/teams-detail';
import { MyTeams } from '../pages/my-teams/my-teams';
import { Game } from '../pages/game/game';
import { Standings } from '../pages/standings/standings';
import { TeamHome } from '../pages/team-home/team-home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        Tournaments,
        Teams,
        TeamsDetail,
        MyTeams,
        Game,
        Standings,
        TeamHome,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Tournaments,
        Teams,
        TeamsDetail,
        MyTeams,
        Game,
        Standings,
        TeamHome,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
