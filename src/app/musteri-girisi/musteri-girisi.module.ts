import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MusteriGirisiPage } from './musteri-girisi.page';

const routes: Routes = [
  {
    path: '',
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
  declarations: [MusteriGirisiPage]
})
export class MusteriGirisiPageModule {}
