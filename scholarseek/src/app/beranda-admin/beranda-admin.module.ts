import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BerandaAdminPage } from './beranda-admin.page';

const routes: Routes = [
  {
    path: '',
    component: BerandaAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BerandaAdminPage]
})
export class BerandaAdminPageModule {}
