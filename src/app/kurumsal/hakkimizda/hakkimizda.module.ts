import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HakkimizdaPage } from './hakkimizda.page';

const routes: Routes = [
  {
    path: '',
    component: HakkimizdaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HakkimizdaPage]
})
export class HakkimizdaPageModule {}
