import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', loadChildren: './anasayfa/anasayfa.module#AnasayfaPageModule' },
  { path: 'hizmetlerimiz', loadChildren: './hizmetlerimiz/hizmetlerimiz.module#HizmetlerimizPageModule' },
  { path: 'domain-hosting', loadChildren: './hizmetlerimiz/domain-hosting/domain-hosting.module#DomainHostingPageModule' },
  { path: 'e-ticaret', loadChildren: './hizmetlerimiz/e-ticaret/e-ticaret.module#ETicaretPageModule' },
  { path: 'internet-reklam', loadChildren: './hizmetlerimiz/internet-reklam/internet-reklam.module#InternetReklamPageModule' },
  { path: 'kurumsal-kimlik', loadChildren: './hizmetlerimiz/kurumsal-kimlik/kurumsal-kimlik.module#KurumsalKimlikPageModule' },
  { path: 'kurumsal-web', loadChildren: './hizmetlerimiz/kurumsal-web/kurumsal-web.module#KurumsalWebPageModule' },
  { path: 'mobil-uygulama', loadChildren: './hizmetlerimiz/mobil-uygulama/mobil-uygulama.module#MobilUygulamaPageModule' },
  { path: 'ozel-yazilim', loadChildren: './hizmetlerimiz/ozel-yazilim/ozel-yazilim.module#OzelYazilimPageModule' },
  { path: 'sosyal-medya-yonetimi', loadChildren: './hizmetlerimiz/sosyal-medya-yonetimi/sosyal-medya-yonetimi.module#SosyalMedyaYonetimiPageModule' },
  { path: 'tasarim', loadChildren: './hizmetlerimiz/tasarim/tasarim.module#TasarimPageModule' },
  { path: 'kurumsal', loadChildren: './kurumsal/kurumsal.module#KurumsalPageModule' },
  { path: 'banka-hesap', loadChildren: './kurumsal/banka-hesap/banka-hesap.module#BankaHesapPageModule' },
  { path: 'ekibimiz', loadChildren: './kurumsal/ekibimiz/ekibimiz.module#EkibimizPageModule' },
  { path: 'hakkimizda', loadChildren: './kurumsal/hakkimizda/hakkimizda.module#HakkimizdaPageModule' },
  { path: 'insankaynaklari', loadChildren: './kurumsal/insankaynaklari/insankaynaklari.module#InsankaynaklariPageModule' },
  { path: 'misyon-vizyon', loadChildren: './kurumsal/misyon-vizyon/misyon-vizyon.module#MisyonVizyonPageModule' },
  { path: 'sosyal-medya', loadChildren: './kurumsal/sosyal-medya/sosyal-medya.module#SosyalMedyaPageModule' },
  { path: 'referanslarimiz', loadChildren: './referanslarimiz/referanslarimiz.module#ReferanslarimizPageModule' },
  { path: 'kimlerle-calistik', loadChildren: './referanslarimiz/kimlerle-calistik/kimlerle-calistik.module#KimlerleCalistikPageModule' },
  { path: 'neler-yaptik', loadChildren: './referanslarimiz/neler-yaptik/neler-yaptik.module#NelerYaptikPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
