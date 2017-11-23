import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomeTabsPage } from '../pages/tabs/Home-tabsD/home-tabs/home-tabs';
import { ApiProvider } from '../providers/api/api';
import { UserProvider } from '../providers/user/user';
import { NoteProvider } from '../providers/note/note';
import { Authservice } from '../services/authservice/authservice';


@NgModule({
  declarations: [
    MyApp,
    HomeTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UserProvider,
    NoteProvider,
    Authservice
  ]
})
export class AppModule {}
