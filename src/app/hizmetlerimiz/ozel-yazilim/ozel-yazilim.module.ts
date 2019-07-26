import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OzelYazilimPage } from './ozel-yazilim.page';

const routes: Routes = [
  {
    path: '',
    component: OzelYazilimPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OzelYazilimPage]
})
export class OzelYazilimPageModule {}
