import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarFacturasPage } from './insertar-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarFacturasPageRoutingModule {}
