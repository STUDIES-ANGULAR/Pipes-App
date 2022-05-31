import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Módulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


// Cambiar el locale de la APP
import localeEspañolColombia from '@angular/common/locales/es-CO';
import localeFrances from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEspañolColombia); //registramos el español colombiano en nuestra App
registerLocaleData(localeFrances); //registramos el frances en nuestra App

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
