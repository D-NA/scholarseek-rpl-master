import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Data } from '../../provider/data';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = "";
  password: string = "";
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http
  ) {
    this.menuCtrl.enable(false);
    this.testApi();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(){
    if(this.username && this.password){
      let loading = this.loadCtrl.create({
        message: 'memuat..'
      });

      //loading.present();

      //apiPost
      let input = {
        username: this.username, 
        password: this.password
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/login.php",input).subscribe(async data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"mahasiswa");//ke lokal
        
        this.navCtrl.navigateRoot('HomePage');
        this.loading.dismiss();
      }
    //  else {
      //  this.loading.dismiss();
      //    let alert = this.alertCtrl.create({     
      //      message : 'please try again',
      //      buttons: ['OK']
      //    });
        //  return await alert.present();
          
    //  }    
      });
      //apiPost    
    }
  }

  register(){
    this.navCtrl.navigateForward('RegisterPage');
  }

  testApi(){
    //api
    this.http.get("http://scholarseek.atspace.cc/db_connect.php").subscribe(data => {
      console.log(data); 
    });
    //api     
  }

}