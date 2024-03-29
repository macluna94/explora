import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from "../providers/auth/auth";

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage = TabsPage;
  rootPage:any = LoginPage


  constructor(platform: Platform, statusBar: StatusBar, private auth: AuthProvider,splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.Session.subscribe(session => {
        if (session) {
          this.rootPage = TabsPage;
        }
        else {
          this.rootPage = LoginPage;
        }
      });



      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
