import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoBolitaComponent } from './components/juego-bolita/juego-bolita.component';
import { TablaMultComponent } from './components/tabla-mult/tabla-mult.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MejoresEstudiantesComponent } from './components/mejores-estudiantes/mejores-estudiantes.component';
import { AlmacenDeporteComponent } from './components/almacen-deporte/almacen-deporte.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoBolitaComponent,
    TablaMultComponent,
    MejoresEstudiantesComponent,
    AlmacenDeporteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
