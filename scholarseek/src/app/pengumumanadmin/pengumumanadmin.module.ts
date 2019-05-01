import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PengumumanadminPage } from './pengumumanadmin.page';

const routes: Routes = [
  {
    path: '',
    component: PengumumanadminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PengumumanadminPage]
})
export class PengumumanadminPageModule {}
