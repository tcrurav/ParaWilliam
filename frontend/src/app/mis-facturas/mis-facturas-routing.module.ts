import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisFacturasPage } from './mis-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: MisFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisFacturasPageRoutingModule {}
