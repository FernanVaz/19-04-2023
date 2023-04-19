import { Injectable } from '@angular/core';
import { factura } from './_models/facturas';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  facturas:factura[]=[]

  add(f:factura){
    this.facturas.push(f)
  }
  delete(id:number){
    const i = this.facturas.findIndex((facturas) =>  facturas.idfactura === id)

    if(i != -1){
      this.facturas.splice( i, 1 )
    }

  }
  update(id: number, updatedFactura: factura){
    const i = this.facturas.findIndex((facturas) => facturas.idfactura === id);
    if (i !== -1) {
      this.facturas[i] = updatedFactura;
    }
  }
  find(id:number):factura{
    const i = this.facturas.findIndex((facturas) => facturas.idfactura === id);
    return this.facturas[i]
  }
  constructor() { }
}
