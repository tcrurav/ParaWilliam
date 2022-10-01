import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { TextValueAccessorDirective } from '@ionic/angular/directives/control-value-accessors/text-value-accessor';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-insertar-facturas',
  templateUrl: './insertar-facturas.page.html',
  styleUrls: ['./insertar-facturas.page.scss'],
})
export class InsertarFacturasPage implements OnInit {
  facturaForm: FormGroup;
  valorCif: string;
  valorProveedor: string;

  constructor(private facturaService: FacturaService, private router: Router,
    public formBuilder: FormBuilder, private zone: NgZone,) {
      this.facturaForm = this.formBuilder.group({
        valorCif: [''],
        valorProveedor: ['']
      })
     }
  
  ngOnInit() {
  }

  onSubmit() {
    if (!this.facturaForm.valid) {
      return false;
    } else {
      this.facturaService.insertarFactura(this.facturaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.facturaForm.reset();
            this.router.navigate(['/mis-facturas']);
          })
        });
    }
  }
}

