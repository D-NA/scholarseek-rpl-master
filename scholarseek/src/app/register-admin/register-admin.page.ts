import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit {
  username: string =""
  nama : string =""
  nip : string=""
  password: string =""
  cpassword: string =""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router) { }

  ngOnInit() {
  }

  async registeradmin(){
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
  }
  showAlert(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }

}
