import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarFacturasPageRoutingModule } from './eliminar-facturas-routing.module';

import { EliminarFacturasPage } from './eliminar-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarFacturasPageRoutingModule
  ],
  declarations: [EliminarFacturasPage]
})
export class EliminarFacturasPageModule {}
