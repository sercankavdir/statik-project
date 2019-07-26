import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NelerYaptikPage } from './neler-yaptik.page';

const routes: Routes = [
  {
    path: '',
    component: NelerYaptikPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NelerYaptikPage]
})
export class NelerYaptikPageModule {}
