import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReferanslarimizPage } from './referanslarimiz.page';

const routes: Routes = [
  {
    path: '',
    component: ReferanslarimizPage,
    children: [

      { path: 'kimlerle-calistik', loadChildren: './kimlerle-calistik/kimlerle-calistik.module#KimlerleCalistikPageModule' },
      { path: 'neler-yaptik', loadChildren: './neler-yaptik/neler-yaptik.module#NelerYaptikPageModule' },

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
  declarations: [ReferanslarimizPage]
})
export class ReferanslarimizPageModule { }
