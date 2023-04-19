import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactarComponent } from './contactar/contactar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FacturaComponent } from './factura/factura.component';
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'contactar', component: ContactarComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'facturas', component: FacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
