import { HizmetlerimizPage } from './../hizmetlerimiz/hizmetlerimiz.page';
import { KurumsalPage } from './../kurumsal/kurumsal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnasayfaPage } from './anasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaPage
  },
  {
    path: 'anasayfa',
    component: AnasayfaPage
  },
  {
    path: 'kurumsal',
    component: KurumsalPage
  },
  {
    path: 'hizmetlerimiz',
    component: HizmetlerimizPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnasayfaPage, KurumsalPage, HizmetlerimizPage]
})
export class AnasayfaPageModule { }
