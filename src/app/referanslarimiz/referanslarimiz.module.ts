import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReferanslarimizPage } from './referanslarimiz.page';

const routes: Routes = [
  {
    path: '',
    component: ReferanslarimizPage
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
export class ReferanslarimizPageModule {}
