import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular'
import { async } from 'q';
import { stringify } from 'querystring';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string =""
  password: string =""
  cpassword: string =""
  showAlert: any;
  //afAuth: any;

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async register(){
    const{ username, password, cpassword} = this
    if(password != cpassword){
      this.showAlert("Error!", "Password doesn't match")
      return console.error("Password doesn't match")
    }

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@apps.ipb.ac.id', password)
      console.log(res)
      this.showAlert("Success!", "Welcome aboard!")
      this.router.navigate(["/home"])
    }catch(error){
      console.dir(error)
      this.showAlert("Error", error.message)
    }

    //async showALert(header: stringify, message: string){
    //  const alert = this.alert.create({
    //    header,
     //   message,
    //    buttons: ["Ok"]
    //  })

    //}
    
  }
  //showAlert(arg0: string, arg1: string) {
  //  throw new Error("Method not implemented.");
  //}

}
