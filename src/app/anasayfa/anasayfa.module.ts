import { MusteriGirisiPage } from './../musteri-girisi/musteri-girisi.page';
import { BizeUlasinPage } from './../bize-ulasin/bize-ulasin.page';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnasayfaPage } from './anasayfa.page';
import { TeklifAlinPage } from '../teklif-alin/teklif-alin.page';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaPage
  },
  {
    path: 'bize-ulasin',
    component: BizeUlasinPage
  },
  {
    path: 'teklif-alin',
    component: TeklifAlinPage
  },
  {
    path: 'musteri-girisi',
    component: MusteriGirisiPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnasayfaPage, BizeUlasinPage, TeklifAlinPage, MusteriGirisiPage]
})
export class AnasayfaPageModule { }
