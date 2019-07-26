import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KurumsalKimlikPage } from './kurumsal-kimlik.page';

const routes: Routes = [
  {
    path: '',
    component: KurumsalKimlikPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KurumsalKimlikPage]
})
export class KurumsalKimlikPageModule {}
