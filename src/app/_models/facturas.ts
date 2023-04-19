export class factura{
  idfactura:number
  idcliente:number
  totalfactura:number
  iva:number

  constructor(idf:number,idc:number,tf:number,iva:number){
    this.idfactura=idf
    this.idcliente=idc
    this.totalfactura=tf
    this.iva=iva
  }
}
