import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Factura{
  identificador: string;
  proveedor: string;
}

@Injectable({
  providedIn: 'root'
})

export class FacturaService {

  endpoint = 'http://localhost:8080/api/facturas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpCliente: HttpClient) { }

  getFacturas() {
    return this.httpCliente.get(this.endpoint);
  }

  insertarFactura(factura: Factura) {
    return this.httpCliente.post(this.endpoint, JSON.stringify(factura),this.httpOptions)
    .pipe(catchError(this.handleError<Factura>('Error occured colega')));
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
