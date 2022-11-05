import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SesionComponent } from './componentes/sesion/sesion.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ReinicioComponent } from './componentes/reinicio/reinicio.component';
import { CrearComponent } from './componentes/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SesionComponent,
    MascotasComponent,
    MenuComponent,
    ReinicioComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
