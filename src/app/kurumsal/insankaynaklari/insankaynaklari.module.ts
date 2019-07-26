import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsankaynaklariPage } from './insankaynaklari.page';

const routes: Routes = [
  {
    path: '',
    component: InsankaynaklariPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsankaynaklariPage]
})
export class InsankaynaklariPageModule {}
