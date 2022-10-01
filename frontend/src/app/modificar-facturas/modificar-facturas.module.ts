import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarFacturasPageRoutingModule } from './modificar-facturas-routing.module';

import { ModificarFacturasPage } from './modificar-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarFacturasPageRoutingModule
  ],
  declarations: [ModificarFacturasPage]
})
export class ModificarFacturasPageModule {}
