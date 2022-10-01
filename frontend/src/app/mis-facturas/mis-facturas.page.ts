import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-mis-facturas',
  templateUrl: './mis-facturas.page.html',
  styleUrls: ['./mis-facturas.page.scss'],
})
export class MisFacturasPage implements OnInit {

  facturas: any = [];

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.getAllFacturas();
  }

  getAllFacturas() {
    this.facturaService.getFacturas().subscribe(response => {
      this.facturas = response;
    });
  }
}
