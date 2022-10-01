import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-modificar-facturas',
  templateUrl: './modificar-facturas.page.html',
  styleUrls: ['./modificar-facturas.page.scss'],
})
export class ModificarFacturasPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController, private facturaService: FacturaService) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Desea modificar la factura?',
      buttons: [
        {
          text: 'Sí',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  
  ngOnInit() {
  }

}
