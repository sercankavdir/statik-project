import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeklifAlinPage } from './teklif-alin.page';

const routes: Routes = [
  {
    path: '',
    component: TeklifAlinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeklifAlinPage]
})
export class TeklifAlinPageModule { }
