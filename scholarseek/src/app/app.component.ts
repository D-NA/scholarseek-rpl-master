import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

//import { AuthenticationService } from './services/Authentication.service';
//import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBuoN3-VKaGWRa8dUPCccPeD9z7tzQytu0",
  authDomain: "scholarseek-dd1.firebaseapp.com",
  databaseURL: "https://scholarseek-dd1.firebaseio.com",
  projectId: "scholarseek-dd1",
  storageBucket: "scholarseek-dd1.appspot.com",
  messagingSenderId: "81944562574"
};

export default config;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Profil',
      url: '/profil',
      icon: 'contact'
    },
    {
      title: 'Pengumuman',
      url: '/pengumuman',
      icon: 'megaphone'
    },
    {
      title: 'Bantuan',
      url: '/bantuan',
      icon: 'help-circle'
    },
    {
      title: 'Log Out',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });  

    //  this.authenticationService.authState.subscribe(state => {
    //    if (state) {
    //      this.router.navigate(['home']);
    //    } else {
    //      this.router.navigate(['login']);
    //    }
    //  });
    //firebase.initializeApp(config);   
  }
}