import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  irMisFacturas() {
    this.router.navigateByUrl("/mis-facturas");
  }

  registrarFacturas() {
    this.router.navigateByUrl("/insertar-facturas");
  }

  modificarFacturas() {
    this.router.navigateByUrl("/modificar-facturas");
  }

  eliminarFacturas() {
    this.router.navigateByUrl("/eliminar-facturas");
  }
}
