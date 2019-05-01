import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'opening',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: './home/home.module#HomePageModule',
    //canActivate: [AuthGuard]
  },
  { path: 'deskripsi', loadChildren: './deskripsi/deskripsi.module#DeskripsiPageModule' },
  { path: 'pengumuman', loadChildren: './pengumuman/pengumuman.module#PengumumanPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'bantuan', loadChildren: './bantuan/bantuan.module#BantuanPageModule' },
  { path: 'beranda-admin', loadChildren: './beranda-admin/beranda-admin.module#BerandaAdminPageModule' },
  { path: 'deskripsi-admin', loadChildren: './deskripsi-admin/deskripsi-admin.module#DeskripsiAdminPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'join', loadChildren: './join/join.module#JoinPageModule' },
  { path: 'opening', loadChildren: './opening/opening.module#OpeningPageModule' },
  { path: 'pengumumanadmin', loadChildren: './pengumumanadmin/pengumumanadmin.module#PengumumanadminPageModule' },
  { path: 'tambahbeasiswa', loadChildren: './tambahbeasiswa/tambahbeasiswa.module#TambahbeasiswaPageModule' },
  { path: 'tambahpengumuman', loadChildren: './tambahpengumuman/tambahpengumuman.module#TambahpengumumanPageModule' },
  { path: 'tjoin', loadChildren: './tjoin/tjoin.module#TjoinPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
