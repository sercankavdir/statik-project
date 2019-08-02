import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', loadChildren: './anasayfa/anasayfa.module#AnasayfaPageModule' },
  { path: 'hizmetlerimiz', loadChildren: './hizmetlerimiz/hizmetlerimiz.module#HizmetlerimizPageModule' },
  { path: 'kurumsal', loadChildren: './kurumsal/kurumsal.module#KurumsalPageModule' },
  { path: 'referanslarimiz', loadChildren: './referanslarimiz/referanslarimiz.module#ReferanslarimizPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
