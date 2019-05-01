import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeskripsiAdminPage } from './deskripsi-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DeskripsiAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeskripsiAdminPage]
})
export class DeskripsiAdminPageModule {}
