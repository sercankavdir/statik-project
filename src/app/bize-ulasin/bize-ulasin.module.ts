import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BizeUlasinPage } from './bize-ulasin.page';

const routes: Routes = [
  {
    path: '',
    component: BizeUlasinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BizeUlasinPage]
})
export class BizeUlasinPageModule {}
