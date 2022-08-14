import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';


//Modulo personalidazado d PrimeNg
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app
import localeEs from '@angular/common/locales/es-CL';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );
registerLocaleData( localeFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //rutas de la app
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,  
  ],
  providers: [
    //localte
    { provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
