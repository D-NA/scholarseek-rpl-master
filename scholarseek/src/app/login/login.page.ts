import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
//import { AuthenticationService } from '../services/Authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  // abcdefg + @apapun.com
  async login() {
    const { username, password } = this;
    try{
      // kind of hack
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@apps.ipb.ac.id', password)

    } catch(err){
      console.dir(err);
      if(err.code === "auth/user-not-found"){
        console.log("User not found")
      }
    }
  }

}
