import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sebagai',
  templateUrl: './sebagai.page.html',
  styleUrls: ['./sebagai.page.scss'],
})
export class SebagaiPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginuser(){
      this.router.navigate(['login'])
  }

  loginadmin(){
    this.router.navigate(['login-admin'])
  }


}
