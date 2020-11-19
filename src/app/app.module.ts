import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {routing, appRoutingProvider} from "./app.routing";
import { PlantillaService } from "./services/plantilla.service";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ModificarComponent } from './components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlantillasComponent,
    DetallesComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,NgbModule,
    routing,HttpClientModule
  ],
  providers: [appRoutingProvider,PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
