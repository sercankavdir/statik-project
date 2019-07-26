import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SosyalMedyaYonetimiPage } from './sosyal-medya-yonetimi.page';

const routes: Routes = [
  {
    path: '',
    component: SosyalMedyaYonetimiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SosyalMedyaYonetimiPage]
})
export class SosyalMedyaYonetimiPageModule {}
