import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisFacturasPageRoutingModule } from './mis-facturas-routing.module';

import { MisFacturasPage } from './mis-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisFacturasPageRoutingModule
  ],
  declarations: [MisFacturasPage]
})
export class MisFacturasPageModule {}
