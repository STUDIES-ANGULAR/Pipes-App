import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Módulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


// Cambiar el locale de la APP
import localeEspColombia from '@angular/common/locales/es-CO';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEspColombia); //registramos el español colombiano en nuestra App

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //Organizamos por prioridad, primero los de angular
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
