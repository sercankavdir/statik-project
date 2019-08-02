import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KurumsalPage } from './kurumsal.page';

const routes: Routes = [
  {
    path: '',
    component: KurumsalPage,
    children: [
      { path: 'banka-hesap', loadChildren: './banka-hesap/banka-hesap.module#BankaHesapPageModule' },
      { path: 'ekibimiz', loadChildren: './ekibimiz/ekibimiz.module#EkibimizPageModule' },
      { path: 'hakkimizda', loadChildren: './hakkimizda/hakkimizda.module#HakkimizdaPageModule' },
      { path: 'insankaynaklari', loadChildren: './insankaynaklari/insankaynaklari.module#InsankaynaklariPageModule' },
      { path: 'misyon-vizyon', loadChildren: './misyon-vizyon/misyon-vizyon.module#MisyonVizyonPageModule' },
      { path: 'sosyal-medya', loadChildren: './sosyal-medya/sosyal-medya.module#SosyalMedyaPageModule' },

    ]
  },
  {
    path: 'anasayfa',
    redirectTo: '/anasayfa',
    pathMatch: 'full'
  },
  {
    path: 'bize-ulasin',
    redirectTo: '/anasayfa/bize-ulasin',
    pathMatch: 'full'
  },
  {
    path: 'teklif-alin',
    redirectTo: '/anasayfa/teklif-alin',
    pathMatch: 'full'
  },
  {
    path: 'musteri-girisi',
    redirectTo: '/anasayfa/musteri-girisi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KurumsalPage]
})
export class KurumsalPageModule { }
