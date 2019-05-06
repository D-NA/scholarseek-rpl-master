import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';

import { AlertController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { async } from 'q';
import { stringify } from 'querystring';
import { Data } from 'src/provider/data';
import { Http } from '@angular/http';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string =""
  nama : string =""
  nim : string=""
  ipk : string=""
  password: string =""
  cpassword: string =""
  passwordTest: string;
  loading: any;
  //afAuth: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public router: Router,
    public http: Http
    ) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.username && this.password && (this.password == this.passwordTest)) {

      let loading = this.loadCtrl.create({
        message: 'memuat..'
      });

      //loading.present();

      //apiPost
      let input = {
        username :this.username, 
        password: this.password
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/register.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"mahasiswa");//ke lokal
        
        this.navCtrl.navigateRoot('HomePage');      
        //loading.dismiss();
      }
      else if(response.status==409) {
        this.loading.dismiss();
          let alert = this.alertCtrl.create({
            message: 'Username Already Taken',      
            buttons: ['OK']
          });
          //alert.present();
          this.loading.dismiss();
      }
      else {
        this.loading.dismiss();
          let alert = this.alertCtrl.create({
            message: 'Failed Creating New Account',      
            buttons: ['OK']
          });
          //alert.present();      
          this.loading.dismiss();
      }    
      });
      //apiPost  

    }
  }

}
