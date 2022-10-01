import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mis-facturas',
    loadChildren: () => import('./mis-facturas/mis-facturas.module').then( m => m.MisFacturasPageModule)
  },
  {
    path: 'insertar-facturas',
    loadChildren: () => import('./insertar-facturas/insertar-facturas.module').then( m => m.InsertarFacturasPageModule)
  },
  {
    path: 'modificar-facturas',
    loadChildren: () => import('./modificar-facturas/modificar-facturas.module').then( m => m.ModificarFacturasPageModule)
  },
  {
    path: 'eliminar-facturas',
    loadChildren: () => import('./eliminar-facturas/eliminar-facturas.module').then( m => m.EliminarFacturasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
