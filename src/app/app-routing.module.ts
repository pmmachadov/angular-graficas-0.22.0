import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasModule ) // loadChildren es para cargar el modulo de forma perezosa. El metodo import() es para importar el modulo graficas.module.ts. El metodo then() es para ejecutar el metodo m.GraficasModule que se encuentra en el archivo graficas.module.ts
  },
  {
    path: '**', // ** es para cualquier ruta que no este definida
    redirectTo: 'graficas' // redirecciona a la ruta graficas
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot() es para que sea la ruta principal
  exports: [RouterModule] // exporta el RouterModule para que sea accesible desde otros modulos
})
export class AppRoutingModule { } // exporta la clase AppRoutingModule para que sea accesible desde otros modulos
