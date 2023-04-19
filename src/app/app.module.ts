import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './factura/factura.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';
import { FacturaService } from './factura.service';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
