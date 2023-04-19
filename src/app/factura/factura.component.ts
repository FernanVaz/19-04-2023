import { Component } from '@angular/core';
import { factura } from '../_models/facturas';
import { FacturaService } from '../factura.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  ids:number=0
  factura:factura = new factura(0,0,0,0)
  facturas:factura[]=[]
  constructor(private facturasS : FacturaService){
    this.facturas = facturasS.facturas
  }
  anadir(){
    this.facturasS.add(this.factura)
    console.log(this.facturas)
    this.facturas = this.facturasS.facturas
    this.factura = new factura(0,0,0,0)
  }
  delete(){
    this.facturasS.delete(this.ids)
  }
  update(){
    this.facturasS.update(this.ids,this.factura)
    this.factura = new factura(0,0,0,0)
  }
  buscar(){
    this.factura=this.facturasS.find(this.ids)
  }
}
