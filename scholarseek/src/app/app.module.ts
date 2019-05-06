import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
//import { AuthGuard } from './services/auth-guard.service';
//import { AuthenticationService } from './services/Authentication.service';
import { HttpClientModule } from '@angular/common/http';
//import firebaseConfig from './firebase'
import { AngularFireModule, FirebaseNameOrConfigToken } from 'angularFire2';
//import { environment } from 'src/environments/environment.prod';
//import * as firebase from 'firebase';
import { AngularFireAuthModule } from '@angular/fire/auth'
//import { from } from 'rxjs';
//import { DashboardComponent } from '';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseNameOrConfigToken),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //AuthGuard,
    //AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }