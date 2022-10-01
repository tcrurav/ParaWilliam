import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarFacturasPageRoutingModule } from './insertar-facturas-routing.module';

import { InsertarFacturasPage } from './insertar-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarFacturasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertarFacturasPage]
})
export class InsertarFacturasPageModule {}
