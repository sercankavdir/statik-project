import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KurumsalWebPage } from './kurumsal-web.page';

const routes: Routes = [
  {
    path: '',
    component: KurumsalWebPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KurumsalWebPage]
})
export class KurumsalWebPageModule {}
