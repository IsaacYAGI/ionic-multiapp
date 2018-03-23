import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from '../environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { ImagenviewverPage } from '../pages/imagenviewver/imagenviewver';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedinPage,
    ImagenviewverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedinPage,
    ImagenviewverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
