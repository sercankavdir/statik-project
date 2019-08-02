import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HizmetlerimizPage } from './hizmetlerimiz.page';


const routes: Routes = [
  {
    path: '',
    component: HizmetlerimizPage,
    children: [

      { path: 'domain-hosting', loadChildren: './domain-hosting/domain-hosting.module#DomainHostingPageModule' },
      { path: 'e-ticaret', loadChildren: './e-ticaret/e-ticaret.module#ETicaretPageModule' },
      { path: 'internet-reklam', loadChildren: './internet-reklam/internet-reklam.module#InternetReklamPageModule' },
      { path: 'kurumsal-kimlik', loadChildren: './kurumsal-kimlik/kurumsal-kimlik.module#KurumsalKimlikPageModule' },
      { path: 'kurumsal-web', loadChildren: './kurumsal-web/kurumsal-web.module#KurumsalWebPageModule' },
      { path: 'mobil-uygulama', loadChildren: './mobil-uygulama/mobil-uygulama.module#MobilUygulamaPageModule' },
      { path: 'ozel-yazilim', loadChildren: './ozel-yazilim/ozel-yazilim.module#OzelYazilimPageModule' },
      { path: 'sosyal-medya-yonetimi', loadChildren: './sosyal-medya-yonetimi/sosyal-medya-yonetimi.module#SosyalMedyaYonetimiPageModule' },
      { path: 'tasarim', loadChildren: './tasarim/tasarim.module#TasarimPageModule' },

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
  declarations: [HizmetlerimizPage]
})
export class HizmetlerimizPageModule { }
