import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlantillasComponent } from "./components/plantillas/plantillas.component";
import { DetallesComponent } from "./components/detalles/detalles.component";
import { ModificarComponent } from "./components/modificar/modificar.component";


const appRoutes:Routes = [
    {path:"",component:PlantillasComponent},
    {path:"details/:idEmpleado",component:DetallesComponent},
    {path:"update/:idEmpleado/:funcion",component:ModificarComponent}
];

export const appRoutingProvider: any[] = [];
export const routing:ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);