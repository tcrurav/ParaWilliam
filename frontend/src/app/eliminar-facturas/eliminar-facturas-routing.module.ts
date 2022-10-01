import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarFacturasPage } from './eliminar-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarFacturasPageRoutingModule {}
